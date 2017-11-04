function validate (values) {
    const errors = {};
    if (!values.username) {
        errors.username = "Required";
    } else if (values.username.length > 15 || values.username.length < 2) {
        errors.username = "Must be from 2 to 15 characters'";
    } else if (!values.country) {
        errors.country = "Required";
    }
    return errors;
}

export default validate;
