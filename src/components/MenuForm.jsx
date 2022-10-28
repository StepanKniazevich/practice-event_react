import {useState} from 'react';
import styles from "./MenuItem.module.scss"
export const MenuForm = () => {
    const [inputURLVal, setInputURLVal] = useState('');
    const [inputNameVal, setInputNameVal] = useState('');
    const clearUrlVal = (e) => {
        setInputURLVal('');
        e.preventDefault();
    }
    const clearNameVal = (e) => {
        setInputNameVal('');
        e.preventDefault();
    }

    return (
        <form className={styles.menuForm}>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        value={inputNameVal}
                        onChange={e => setInputNameVal(e.target.value)}
                        placeholder='Link name'
                        className={styles.input}
                        required="required"/>
                    <button 
                        className={styles.resetValue}
                        onClick={clearNameVal}>
                            &times;
                    </button>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        value={inputURLVal}
                        onChange={e => setInputURLVal(e.target.value)}
                        placeholder='Link URL'
                        className={styles.input}
                        required="required"/>
                    <button 
                        className={styles.resetValue} 
                        onClick={clearUrlVal}>
                        &times;
                    </button>
                </div>
            </div>
            <button type="submit" className={`${styles.addLink} ${styles.addLinkForm}`}>
                Send
            </button>
        </form>
    );
}