export const rulesHandler = {
    required: (value, isRequired) => !isRequired || Boolean(value),
    min: (value, min) => value.length >= min,
    equal: (value, equal) => value.length === equal,
    regex: (value, regex) => new RegExp(regex).test(value),
}