//check if the input field is empty not add
export const required = (value) => {
    // return value ? false : true ;//working
    debugger
    return value ? undefined : "Field is required";
    //true - not add -> " ", 1, -5 every if true not add
    //false - added ->  return value; //added  because come undefined
}

////validator creator for own parametr
export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
}
