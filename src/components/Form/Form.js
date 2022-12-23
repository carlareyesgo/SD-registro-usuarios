import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { rulesHandler } from "../../utils";
import Input from "./Input/Input";

const FormComponent = ({ inputs }) => {
    const [formInputs, setFormInputs] = useState([
        {
            id: 1,
            type: 'text',
            label: 'Nombre(s)',
            isTouched: false,
            validationRules: [
                {
                    type: 'required',
                    ruleFactor: true,
                    errorMessage: 'El nombre es un dato requerido.',
                    isValid: false,
                },
                {
                    type: 'min',
                    ruleFactor: 3,
                    errorMessage: 'El nombre debe contener al menos 3 caracteres.',
                    isValid: false,
                },
                {
                    type: 'regex',
                    ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                    errorMessage: 'El nombre sólo puede contener letras.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: '',
        },
        {
            id: 2,
            type: 'text',
            label: 'Apellido Paterno',
            isTouched: false,
            validationRules: [
                {
                    type: 'required',
                    ruleFactor: true,
                    errorMessage: 'El apellido paterno es un dato requerido.',
                    isValid: false,
                },
                {
                    type: 'min',
                    ruleFactor: 2,
                    errorMessage: 'El apellido paterno debe contener al menos 2 caracteres.',
                    isValid: false,
                },
                {
                    type: 'regex',
                    ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                    errorMessage: 'El apellido paterno sólo puede contener letras.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: '',
        },
        {
            id: 3,
            type: 'text',
            label: 'Apellido Materno',
            isTouched: false,
            validationRules: [
                {
                    type: 'required',
                    ruleFactor: true,
                    errorMessage: 'El apellido materno es un dato requerido.',
                    isValid: false,
                },
                {
                    type: 'min',
                    ruleFactor: 2,
                    errorMessage: 'El apellido materno debe contener al menos 2 caracteres.',
                    isValid: false,
                },
                {
                    type: 'regex',
                    ruleFactor: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
                    errorMessage: 'El apellido materno sólo puede contener letras.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: '',
        },
        {
            id: 5,
            type: 'tel',
            label: 'Teléfono',
            isTouched: false,
            validationRules: [
                {
                    type: 'required',
                    ruleFactor: true,
                    errorMessage: 'El teléfono es un dato requerido.',
                    isValid: false,
                },
                {
                    type: 'equal',
                    ruleFactor: 10,
                    errorMessage: 'El teléfono debe contener 10 números.',
                    isValid: false,
                },
                {
                    type: 'regex',
                    ruleFactor: /^[0-9]+$/g,
                    errorMessage: 'El teléfono sólo puede contener números.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: '',
        },
        {
            id: 6,
            type: 'email',
            label: 'Correo',
            isTouched: false,
            validationRules: [
                {
                    type: 'required',
                    ruleFactor: true,
                    errorMessage: 'El correo es un dato requerido.',
                    isValid: false,
                },
                {
                    type: 'regex',
                    ruleFactor: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    errorMessage: 'El correo sólo puede contener letras.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: '',
        },
        {
            id: 4,
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
                    isValid: false,
                },
            ],
            isValid: false,
            value: '',
        },
    ]);

    const touchedHandler = (id) => {
        const oldFormInputs = [...formInputs];
        const indexInput = oldFormInputs.findIndex((input) => input.id === id);
        oldFormInputs[indexInput].isTouched = true;
        setFormInputs(oldFormInputs);
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
        const oldFormInputs = [...formInputs];
        const indexInput = oldFormInputs.findIndex((input) => input.id === id);
        oldFormInputs[indexInput].value = event.target.value;
        validationHandler(oldFormInputs[indexInput])
        setFormInputs(oldFormInputs);
    };

    return (
        <Form>
            {formInputs.map((input) => (
                <Input
                    key={input.id}
                    input={input}
                    touchedHandler={touchedHandler}
                    onChangeHandler={onChangeHandler}
                />
            ))}
            <br />
            <br />
            <Button type="submit">Registrar</Button>
        </Form>
    )

}

export default FormComponent;
