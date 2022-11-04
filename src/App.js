import {Menu} from './components/menu/Menu';
import styles from './App.module.scss';
import {data} from "./api/data";
import { useState} from 'react';
import {Context} from './context';

function App() {
    const [dataLinks, setDataLinks] = useState(data);

    const dataFunctions = {
        del: (title) => {
            setDataLinks(dataLinks.filter((link) => 
               link.title != title
            ))
        },
        add: (title,url) => {
          setDataLinks(dataLinks.concat([{title:title,link:url}])
       )
        }
    }
    return (
        <Context.Provider value={{
                dataLinks,
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
