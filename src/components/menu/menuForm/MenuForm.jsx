import {useState} from 'react';
import styles from "../MenuItem.module.scss";
import {useContext} from "react";
import {Context} from '../../../context';
import {useInput} from './formValidation/Validation'
import {uniqueLink} from './dataValidation/DataValidation';
import {useValidTypeErrors } from './formValidation/ValidationTypeErrors';
import {errorsMessages} from './errorMessages';
import {MAX_LENGTH, MIN_LENGTH, IS_EMPTY, NOT_UNIQUE} from './typeErrors';

const validationsName = {
   'errorLength':{[MIN_LENGTH]:3 , [MAX_LENGTH]:10},
    [IS_EMPTY]: true,
}
const validationsUrl = {
    'invalidUrl' : /^(ftp|http|https):\/\/[^ "]+$/  
}
export const MenuForm = ({setNewLink}) => {
    const {dataFunctions, dataLinks} = useContext(Context);
    const [notUnique,setNotUnique] = useState(false);
 /*    const [errorUrl,setErrorUrl] = useState (false);
    const [errorName,setErrorName] = useState (false); */
    const linkName = useInput(validationsName);
    const linkUrl = useInput(validationsUrl);
    const linkNameErrors = {...useValidTypeErrors(linkName),[NOT_UNIQUE]:notUnique};
    const linkUrlErrors = {...useValidTypeErrors(linkUrl)};
    const errors = {...linkUrlErrors, ...linkNameErrors};
    console.log(errors);

    const isErrorName = () => {
        for (let error in linkNameErrors ) {
            if (linkNameErrors[error]) {
                return true;
            }
        }
        return false;
    }
    const isErrorUrl = () => {
        for (let error in linkUrlErrors ) {
            if (linkUrlErrors[error]) {
                return true;
            }
        }
        return false;

    }
    console.log("ssss" , isErrorUrl());
    const clearVal = e => {
        e
            .target
            .className
            .includes("resetUrlVal")
                ? linkUrl.setValue('')
                : linkName.setValue('');
        e.preventDefault();
    }

  
    const addLink = (e) => {
        if (uniqueLink(linkName.value,dataLinks)) {
            dataFunctions.add(linkName.value, linkUrl.value);
            setNewLink(false);
        }
        setNotUnique(true);
        e.preventDefault();
    }
    
    return (
        <form className={styles.menuForm}>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        value={linkName.value}
                        onChange={e => linkName.onChange(e)}
                        onBlur={e => linkName.onBlur(e)}
                        placeholder='Link name'
                        className={`${styles.input} ${isErrorName() && styles.invaidInput }`}
                        required />
                    <button className={`${styles.reset}  resetNameVal `} onClick={clearVal}>
                        &times;
                    </button>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="name"
                        value={linkUrl.value}
                        onChange = {e => linkUrl.onChange(e)}
                        onBlur = {e => linkUrl.onBlur(e)}
                        placeholder='Link URL'
                        className={`${styles.input} ${isErrorUrl() && styles.invaidInput }`}
                        required />
                    <button className={`${styles.reset}  resetUrlVal `} onClick={clearVal}>
                        &times;
                    </button>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button
                    type="submit"
                    className={`${styles.addLink} ${styles.btnStyle}`}
                    onClick={addLink}>
                    Add
                </button>
                <button
                    className={`${styles.cancel} ${styles.btnStyle}`}
                    onClick={() => setNewLink(false)}>
                    Cancel
                </button>
            </div>
        </form>
    );
}