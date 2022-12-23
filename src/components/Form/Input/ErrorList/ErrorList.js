const ErrorList = ({ validationRules }) => (
    <ul>
        {
            validationRules
                .filter((validationRule) => !validationRule.isValid)
                .map((validationRule, index) => (
                    <li key={index} className="h6 text-danger col-12"> {validationRule.errorMessage}</ li>
                ))
        }
    </ul>
);


export default ErrorList;