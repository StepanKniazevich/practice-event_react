import {useState,useContext} from 'react';
import styles from "../MenuItem.module.scss";
import {Context} from '../../../context';
import {useInput} from './formValidation/Validation'
import {uniqueLink} from './dataValidation/DataValidation';
import {useValidTypeErrors} from './formValidation/ValidationTypeErrors';
import {ErrorMessages} from './ErrorMessages';
import { NOT_UNIQUE, INVALID_URL} from './typeErrors';
import {validationsName,validationsUrl} from './validationRegEx';
import {allErrors, isError} from './errorsUtils';

export const MenuForm = ({setNewLink}) => {
    const {dataFunctions, dataLinks} = useContext(Context);
    const [notUnique, setNotUnique] = useState(false);
    const linkName = useInput(validationsName);
    const linkUrl = useInput(validationsUrl);
    const linkNameErrors = {
        ...useValidTypeErrors(linkName),
        [NOT_UNIQUE]: notUnique
    };
    const linkUrlErrors = {
        ...useValidTypeErrors(linkUrl)
    };
    const errors = allErrors({...linkNameErrors,[INVALID_URL]:linkUrlErrors[INVALID_URL]});
   
    

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
        if (uniqueLink(linkName.value, dataLinks)) {
            dataFunctions.add(linkName.value, linkUrl.value);
            setNewLink(false);
        }
        setNotUnique(true);
        e.preventDefault();
    }
   

    return (<> 
                <div className={styles.errorsWrapper}> {
                    errors.map(error => <ErrorMessages error = {error} key = {error}/>)}
                </div>
                <form className = { styles.menuForm} > 
                    <div className = {styles.inputsWrapper}>
                        <div className = {styles.inputContainer}>
                            <input
                                type="text"
                                value={linkName.value}
                                onChange = {e => linkName.onChange(e)}
                                onBlur = {e => linkName.onBlur(e)}
                                placeholder='Link name'
                                className={`${styles.input} ${isError(linkNameErrors) && styles.invaidInput}`}
                                required="required"/>
                            <button className={`${styles.reset}  resetNameVal `} onClick = {clearVal}>
                                &times;
                            </button>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="name"
                                value={linkUrl.value}
                                onChange =
                                {e => linkUrl.onChange(e)}
                                onBlur =
                                {e => linkUrl.onBlur(e)}
                                placeholder='Link URL'
                                className={`${styles.input} ${isError(linkUrlErrors) && styles.invaidInput}`}
                                required="required"/>
                            <button className={`${styles.reset}  resetUrlVal `} onClick={clearVal}>
                                &times;
                            </button>
                        </div>
                    </div>
                    <div className = {styles.btnWrapper}>
                        <button
                            type="submit"
                            className = {`${styles.addLink} ${styles.btnStyle}`}
                            onClick = {addLink}
                            disabled = {
                                errors.length||!linkUrl.value
                                    ? true
                                    : false}>
                            Add
                        </button>
                        <button
                            className={`${styles.cancel} ${styles.btnStyle}`}
                            onClick={() => setNewLink(false)}>
                            Cancel
                        </button>
                    </div> 
                </form> 
            </>
    );
}