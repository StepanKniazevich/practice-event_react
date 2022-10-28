import {Menu} from './components/Menu';
import styles from './App.module.scss';
import {data} from "./api/data";
import reducer from "./reducer/reducer";
import {useReducer, useState} from 'react';
import {deleteLink, addLink} from './reducer/actions';
import {Context} from './context';

function App() {
    const [dataLinks, setDataLinks] = useState(data);
    /*   const [state, dispatch] = useReducer(reducer, data);*/
    const dataFunctions = {
        del: (title) => {
            console.log(title);
            setDataLinks(dataLinks.filter((link) => 
               link.title != title
            ))
        },

        add: (title) => {
            console.log(title);
        }
    }
    return (
        <Context.Provider value={{
                dataFunctions
            }}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <Menu data={dataLinks}/>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
