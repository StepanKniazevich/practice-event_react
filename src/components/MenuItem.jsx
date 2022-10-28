import React from "react";
import styles from "./MenuItem.module.scss";
import {useState} from "react";
import { useContext } from "react";
import {Context} from '../context.js';

export const MenuItem = ({title, link}) => {
    const [time, setTime] = useState(1);
    const {dataFunctions} = useContext(Context);
    const handler = () => {
        setTime(time + 1);
        alert("Don't press on this link , you press "+ time + " time");
    };
    const deleteLink = () => {
        dataFunctions.del(title);
    }
    return (
        <li className={styles.item}>
            {
                link
                    ? <a href={link} target="_blank" className={styles.link}>{title}</a>
                    : <div
                            className={styles.block}
                            onClick = {handler}>{title}</div>
            }
        <div className = {styles.cross} onClick = {deleteLink} >X</div>
        </li>
        
    );
}