import React from 'react';
import styles from './Button.module.css';


function Button(props) {
    function handleClick(event) {
        switch (event.target.textContent) {
            case 'Cancel':
                props.canceled();
                break;
            default:
                break;
        }
    }

    return (
        <div className='button'>
            <button className={styles.button} onClick={handleClick} onSubmit={props.collectInfo}>
                {props.value}
            </button>
        </div>
    );
}

export default Button;
