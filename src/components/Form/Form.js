import { Button, Form } from "react-bootstrap";
import Input from "./Input/Input";

const FormComponent = ({ formInputs, onSubmitHandler, touchedHandler, onChangeHandler, isButtonInactive, textButton, variantButton }) => {
    return (
        <Form onSubmit={onSubmitHandler}>
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
            <Button
                type="submit"
                disabled={isButtonInactive}
                variant={variantButton}
            >
                {textButton}
            </Button>
        </Form>
    )

}

export default FormComponent;
