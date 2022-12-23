import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FormComponent from "../components/Form/Form";
import { getUser, updateUser } from "../services/users";
import { rulesHandler } from "../utils";

const DetalleUsuarioPage = () => {
    const [userInputs, setUserInputs] = useState([]);
    const [isButtonInactive, setIsButtonInactive] = useState(false);

    const { id } = useParams();

    const buildInputs = () => {
        const userInfo = getUser(id - 1);

        setUserInputs([
            {
                id: 1,
                key: 'nombre',
                type: 'text',
                label: 'Nombre(s)',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El nombre es un dato requerido.',
                        isValid: true,
                    },
                    {
                        type: 'min',
                        ruleFactor: 3,
                        errorMessage: 'El nombre debe contener al menos 3 caracteres.',
                        isValid: true,
                    },
                    {
                        type: 'regex',
                        ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                        errorMessage: 'El nombre sólo puede contener letras.',
                        isValid: true,
                    }
                ],
                isValid: true,
                value: userInfo.nombre,
            },
            {
                id: 2,
                key: 'apellido-paterno',
                type: 'text',
                label: 'Apellido Paterno',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El apellido paterno es un dato requerido.',
                        isValid: true,
                    },
                    {
                        type: 'min',
                        ruleFactor: 2,
                        errorMessage: 'El apellido paterno debe contener al menos 2 caracteres.',
                        isValid: true,
                    },
                    {
                        type: 'regex',
                        ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                        errorMessage: 'El apellido paterno sólo puede contener letras.',
                        isValid: true,
                    }
                ],
                isValid: true,
                value: userInfo['apellido-paterno'],
            },
            {
                id: 3,
                type: 'text',
                key: 'apellido-materno',
                label: 'Apellido Materno',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El apellido materno es un dato requerido.',
                        isValid: true,
                    },
                    {
                        type: 'min',
                        ruleFactor: 2,
                        errorMessage: 'El apellido materno debe contener al menos 2 caracteres.',
                        isValid: true,
                    },
                    {
                        type: 'regex',
                        ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                        errorMessage: 'El apellido materno sólo puede contener letras.',
                        isValid: true,
                    }
                ],
                isValid: true,
                value: userInfo['apellido-materno']
            },
            {
                id: 5,
                key: 'telefono',
                type: 'tel',
                label: 'Teléfono',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El teléfono es un dato requerido.',
                        isValid: true,
                    },
                    {
                        type: 'equal',
                        ruleFactor: 10,
                        errorMessage: 'El teléfono debe contener 10 números.',
                        isValid: true,
                    },
                    {
                        type: 'regex',
                        ruleFactor: /^[0-9]+$/g,
                        errorMessage: 'El teléfono sólo puede contener números.',
                        isValid: true,
                    }
                ],
                isValid: true,
                value: userInfo.telefono,
            },
            {
                id: 6,
                key: 'correo',
                type: 'email',
                label: 'Correo',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El correo es un dato requerido.',
                        isValid: true,
                    },
                    {
                        type: 'regex',
                        ruleFactor: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        errorMessage: 'El correo no tiene un formato válido.',
                        isValid: true,
                    }
                ],
                isValid: true,
                value: userInfo.correo,
            },
            {
                id: 4,
                key: 'genero',
                type: 'radio',
                options: [
                    {
                        key: 'F',
                        label: 'Femenino'
                    },
                    {
                        key: 'M',
                        label: 'Masculino'
                    }
                ],
                label: 'Genero',
                isTouched: false,
                validationRules: [
                    {
                        type: 'required',
                        ruleFactor: true,
                        errorMessage: 'El genero es un dato requerido.',
                        isValid: true,
                    },
                ],
                isValid: true,
                value: userInfo.genero,
            },
        ]);
    }

    const touchedHandler = (id) => {
        const oldFormInputs = [...userInputs];
        const indexInput = oldFormInputs.findIndex((input) => input.id === id);
        oldFormInputs[indexInput].isTouched = true;
        setUserInputs(oldFormInputs);
    };

    const validationHandler = (input) => {
        const { value, validationRules } = input;
        let valueIsValid = true;
        input.validationRules = validationRules.map((rule) => {
            let ruleIsValid = rulesHandler[rule.type](value, rule.ruleFactor);
            valueIsValid = valueIsValid && ruleIsValid;
            return ({ ...rule, isValid: ruleIsValid })
        });
        input.isValid = valueIsValid;
    };

    const onChangeHandler = (event, id) => {
        const oldFormInputs = [...userInputs];
        const indexInput = oldFormInputs.findIndex((input) => input.id === id);
        oldFormInputs[indexInput].value = event.target.value;
        validationHandler(oldFormInputs[indexInput])
        setUserInputs(oldFormInputs);
        setIsButtonInactive(!userInputs.reduce((acc, current) => acc && current.isValid, true))

    };


    const onSubmitHandler = (event) => {
        event.preventDefault();
        const formEntries = {};
        userInputs.forEach((input) => {
            formEntries[input.key] = input.value;
        });
        updateUser(formEntries, id - 1);
        setIsButtonInactive(true);
    }

    useEffect(() => {
        buildInputs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>Editar</h1>
            <FormComponent
                formInputs={userInputs}
                onSubmitHandler={onSubmitHandler}
                touchedHandler={touchedHandler}
                onChangeHandler={onChangeHandler}
                isButtonInactive={isButtonInactive}
                textButton='Editar'
                variantButton='warning'
            />
        </>)
}

export default DetalleUsuarioPage;