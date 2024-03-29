export const requiredField = (value) => {
    if (!value) {
        return 'Field is required';
    } else {
        return undefined;
    }
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;
    } else {
        return undefined;
    }
}