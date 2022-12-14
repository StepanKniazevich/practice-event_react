import {React, useState, useContext} from "react";
import {MenuItem} from "./MenuItem";
import {MenuForm} from "./menuForm/MenuForm";


import styles from "./MenuItem.module.scss"

export const Menu = ({data}) => {
    const [newLink, setNewLink] = useState(false);
    const addLink = () => setNewLink(true);
    return (
        <nav className={styles.menuItems}>{
                data.length
                    ? <ul className={styles.items}>
                            {data.map((item) => (<MenuItem {...item} key={item.title}/>))}
                        </ul>
                    : <h2 className={styles.noLink}>Please add new link</h2>
            }
            {
                !newLink
                    ? <button className = {styles.btnStyle} onClick={addLink}>Add link</button>
                    : <MenuForm setNewLink = {setNewLink}/>
            }
        </nav>
    );
}