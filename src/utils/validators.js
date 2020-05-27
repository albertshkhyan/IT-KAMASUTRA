//check if the input field is empty not add
export const required = (value) => {
    // return value ? false : true ;//working
    return value ? undefined : "Field is required";
    //true - not add -> " ", 1, -5 every if true not add
    //false - added ->  return value; //added  because come undefined
}

////validator creator for own parametr
export const maxLength = (max) => (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
}

export const minLengthPassowrd = (max) => (value) => {
    return value && value.length < max ? `Enter a password longer than ${max} characters` : undefined;
}


export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
