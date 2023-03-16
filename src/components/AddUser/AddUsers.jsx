import Button from '../Button';
import styles from './AddUser.module.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function AddUsers({ showAllList}) {
    const userName = useRef();
    const userSurname = useRef();
    const userPhone = useRef();

    function collectInfo(event) {
        event.preventDefault();

        let newUserObj = {
            id: Date.now(),
            name: userName.current.value + ' ' + userSurname.current.value,
            phone: userPhone.current.value,
        };

        if (Object.values(newUserObj)[1] !== ' ' && Object.values(newUserObj)[2] !== '') {
            showAllList(newUserObj);
        }
        canceled();
    }

    function canceled() {
        userName.current.value = '';
        userSurname.current.value = '';
        userPhone.current.value = '';
    }

    return (
        <div>
             <Link to = "/"><button  className={styles.button}>Go to Home Page</button></Link> 
             <Link to = "/showlist"><button className={styles.button} >Go to List Page</button></Link> 
            <h2>AddUsers</h2>
            <form className={styles.forms} onSubmit={collectInfo}>
                <label>
                    Name
                    <input ref={userName} type='text' name='userName' />
                </label>
                <label>
                    {' '}
                    Surname
                    <input ref={userSurname} type='text' name='userSurname' />
                </label>
                <label>
                    Phone
                    <input ref={userPhone} type='number' name='number' />
                </label>
                <Button value='Add new user' collectInfo={collectInfo} />
            </form>
            <Button value='Cancel' canceled={canceled} />
            
        </div>
    );
   
}

export default AddUsers;
