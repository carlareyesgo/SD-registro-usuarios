import { Store } from 'react-notifications-component';

export const rulesHandler = {
    required: (value, isRequired) => !isRequired || Boolean(value),
    min: (value, min) => value.length >= min,
    equal: (value, equal) => value.length === equal,
    regex: (value, regex) => new RegExp(regex).test(value),
}

export const buildNotification = ({
    title,
    type,
    message,
}) => {
    Store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });

}