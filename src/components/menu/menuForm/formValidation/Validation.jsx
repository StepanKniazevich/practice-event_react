import {useState, useEffect} from 'react';
import {MAX_LENGTH, MIN_LENGTH, INVALID_URL, NOT_UNIQUE, IS_EMPTY,ERROR_LENGTH } from '../typeErrors';

const useValidation = (value, validations) => {
    const [uniqueLink, setUniqueLink] = useState('');
    const [isEmpty, setEmpty] = useState(false);
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [invalidUrl, setInvalidUrl] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case ERROR_LENGTH :
                    ((value.length < validations[validation][MIN_LENGTH]) && (value.length !== 0))
                        ? setMinLength(true)
                        : setMinLength(false);
                    value.length >= validations[validation][MAX_LENGTH]
                        ? setMaxLength(true)
                        : setMaxLength(false);
                    break;
                case IS_EMPTY:
                    value
                        ? setEmpty(false)
                        : setEmpty(true);
                    break;
                case INVALID_URL:
                    validations[validation].test(value)
                        ? setInvalidUrl(false)
                        : setInvalidUrl(true);
            }
        }
    }, [value]);
    return {isEmpty, minLength, maxLength, invalidUrl}
}

export const useInput = (validations) => {
    const [value, setValue] = useState('');
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = e => {
        setValue(e.target.value);

    }
    const onBlur = e => {
        setDirty(true);
        console.log("blure");

    }
    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

