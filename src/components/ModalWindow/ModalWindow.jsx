import styles from './ModalWindow.module.css';
import React from 'react';

function ModalWindow({list, showAllList, id, setModal}) {
	function listFilter(id) {
        const newList = list.filter((obj) => obj.id !== id);
        showAllList(newList);
		setModal({id:null, isOpen:false});
    }

  return (
	<div className={styles.modal}>
	<div className={styles.modalContent}>
		 <h1>Are you sure?</h1>
		 <div className={styles.innerButtons}>
          <button onClick={()=>listFilter(id)}>Yes, I do!</button>
          <button onClick={()=>setModal({id:null, isOpen:false})}>No, I don't!</button>
        </div>
	</div>
	</div>
  )
}

export default ModalWindow;