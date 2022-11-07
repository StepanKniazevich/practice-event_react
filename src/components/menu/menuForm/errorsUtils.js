export const allErrors = (allErrors) => {
    let errors = []; 
    for ( let error in allErrors ) {
        if (allErrors[error]) {
            errors = [...errors,error ];
        }
    }
    return errors;

} 

export const isError = (linkErrors) => {
    for (let error in linkErrors) {
        if (linkErrors[error]) {
            return true;
        }
    }
    return false;
}