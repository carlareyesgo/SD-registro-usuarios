import FormComponent from "../components/Form/Form";

const RegistroPage = () => {
    const formInputs = [
        {
            id: 0,
            label: 'Nombre(s)',
            isValid: false,
            isTouched: false,
            validation:[
                {
                    type: 'required',
                    value: true,
                    errorMessage: 'El nombre es un dato requerido.',
                },
                {
                    type: 'min',
                    value: 3,
                    errorMessage: 'El nombre debe contener al menos 3 caracteres.',
                },
                {
                    type: 'regex',
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    errorMessage: 'El nombre sólo puede contener letras.',
                }
            ],
            value: '',
        },
    ];
    return (
        <FormComponent inputs={formInputs || []} />
    );
}

export default RegistroPage;