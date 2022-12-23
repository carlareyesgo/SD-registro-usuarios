import { FloatingLabel, Form } from "react-bootstrap";
import ErrorList from "./ErrorList/ErrorList";

const Input = ({ input, onChangeHandler, touchedHandler }) => {
    return (
        <>
            <FloatingLabel
                label={input.label}
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    min={5}
                    value={input.value}
                    onChange={(event) => onChangeHandler(event, input.id)}
                    onBlur={(event) => touchedHandler(event, input.id)}
                />
            </FloatingLabel>
            {input.isTouched && !input.isValid && <ErrorList validationRules={input.validationRules} />}
        </>
    )
}

export default Input;