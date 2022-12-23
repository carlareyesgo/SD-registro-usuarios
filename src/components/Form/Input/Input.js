import { FloatingLabel, Form } from "react-bootstrap";
import ErrorList from "./ErrorList/ErrorList";

const Input = ({ input, onChangeHandler, touchedHandler }) => {

    const getType = () => {
        switch (input.type) {
            case 'text':
            case 'tel':
            case 'email':
                return <FloatingLabel
                    label={input.label}
                    className="mb-3"
                >
                    <Form.Control
                        type={input.type}
                        value={input.value}
                        onChange={(event) => onChangeHandler(event, input.id)}
                        onBlur={() => touchedHandler(input.id)}
                        isInvalid={input.isTouched && !input.isValid}
                        isValid={input.isTouched && input.isValid}
                    />
                </FloatingLabel>
            case 'radio':
                return (
                    <>
                        <Form.Label className="col-12">{input.label}</Form.Label>
                        {input.options.map((option) => (
                            <Form.Check
                                id={`${input.label.replaceAll(' ', '-')}-${option.label.replaceAll(' ', '-')}-${option.key.replaceAll(' ', '-')}`}
                                key={option.key}
                                inline
                                label={option.label}
                                name={input.label.replaceAll(' ', '-')}
                                type={input.type}
                                defaultChecked={option.key === input.value}
                                onChange={(event) => {
                                    onChangeHandler(event, input.id);
                                    touchedHandler(input.id);
                                }}
                                value={input.value}
                                isInvalid={input.isTouched && !input.isValid}
                                isValid={input.isTouched && input.isValid}
                            />
                        ))}
                    </>
                )
            default:
                return null;
        }
    }
    return (
        <>
            {getType()}
            {input.isTouched && !input.isValid && <ErrorList validationRules={input.validationRules} />}
        </>
    )
}

export default Input;