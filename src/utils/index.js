export const rulesHandler = {
    required: (value, isRequired) => !isRequired || Boolean(value),
    min: (value, min) => value.length >= min,
    regex: (value, regex) => regex.test(value),
}