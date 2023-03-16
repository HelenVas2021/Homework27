import styles from './ListPage.module.css';
import { Link } from 'react-router-dom';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useState } from 'react';

const ListPage = ({ list, showAllList }) => {
    const [modal, setModal] = useState({id:null, isOpen:false});

    return (
        <div>
         <Link to = "/"><button className={styles.btn} >Go to Home Page</button></Link> 
            <h2>ListPage</h2>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.headers}>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Phone Number</td>
                    </tr>
                    {list.length !== 0 ? (
                        list.map((obj) => {
                            return (
                                <tr key={obj.id}>
                                    <td>{obj.name.split(' ')[0]}</td>
                                    <td>{obj.name.split(' ')[1]}</td>
                                    <td className={styles.thirdCol}>{obj.phone}</td>
                                    <td>
                                        <button className={styles.btn} onClick={() => setModal({id:obj.id, isOpen:true})}>
                                            Delete
                                        </button>
                                      <Link to = {`/editpage/${obj.id}`}> <button className={styles.btn}  > 
                                      Edit
                                       </button></Link>
                                       </td>
                                </tr>

                            );
                        })
                    ) : (
                        <tr>LOADING.....</tr>
                    )}
                </tbody>
            </table>
          {modal.isOpen && <ModalWindow id = {modal.id} list = {list} showAllList = {showAllList} setModal = {setModal}/>} 
        </div>
    );
};

export default ListPage;
