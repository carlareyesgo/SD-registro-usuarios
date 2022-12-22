import { FloatingLabel, Form } from "react-bootstrap";

const Input = ({ input, onChangeHandler, touchedHandler }) => {
    return (
        <>
            <FloatingLabel
                label={input.label}
                className="mb-3"
            >
                <Form.Control type="text" placeholder="name@example.com" min={5} value={input.value} onChange={(event)=>onChangeHandler(event, input.id)} />
            </FloatingLabel>
            <label className="h6 text-danger">{input.invalidMessage}</label>
        </>
    )
}

export default Input;