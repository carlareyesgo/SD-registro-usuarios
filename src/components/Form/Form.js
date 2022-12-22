/* 
-  Nombres => String | regex
-  Apellido Paterno => String | regex 
-  Apellido Materno => String| regex
- Genero => Boolean
- Teléfono => number| regex
- Correo => String| regex
*/

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { rulesHandler } from "../../utils";
import Input from "./Input/Input";

const FormComponent = ({ inputs }) => {
    const [formInputs, setFormInputs] = useState([
        {
            id: 8123480234,
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
                    ruleFactor: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
                    errorMessage: 'El nombre sólo puede contener letras.',
                    isValid: false,
                }
            ],
            isValid: false,
            value: 'Mario',
        },
        {
            id: 3,
            label: 'Nombre(s)',
            isTouched: false,
            validation: [
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
                    ruleFactor: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
                    errorMessage: 'El nombre sólo puede contener letras.',
                    isValid: false,
                }
            ],
            value: 'Pedro',
        },
    ]);
    const touchedHandler = () => { };
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
            <Button type="submit">Registrar</Button>
        </Form>
    )

}

export default FormComponent;
