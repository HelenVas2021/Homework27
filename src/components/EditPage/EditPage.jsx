
import { useRef } from 'react';
import styles from './EditPage.module.css'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

function EditPage({editUserWrap, list}) {

const {userId} = useParams();
const navigate = useNavigate();
const currentUser = list.filter((obj) => obj.id === Number(userId));

    const userName = useRef(currentUser[0].name.split(' ')[0]);
    const userSurname = useRef(currentUser[0].name.split(' ')[1]);
    const userPhone = useRef(currentUser[0].phone);
	
    function collectInfo(event) {
        event.preventDefault();

        let newUserObj = {
            id: userId,
            name: userName.current.value + ' ' + userSurname.current.value,
            phone: userPhone.current.value,
        };
		editUserWrap(newUserObj);
		
		navigate('/showlist');
    }


    return (
        <div>
             <Link to = "/"><button className={styles.button} >Go to Home Page</button></Link> 
             <Link to = "/showlist"><button className={styles.button} >Go to List Page</button></Link> 
            <h2>Edit User</h2>
            <form className={styles.forms} onSubmit={collectInfo}>
                <label>
                    Name
                    <input ref={userName} type='text' name='userName' defaultValue = {currentUser[0].name.split(' ')[0]} />
                </label>
                <label>
                    {' '}
                    Surname
                    <input ref={userSurname} type='text' name='userSurname' defaultValue = {currentUser[0].name.split(' ')[1]} />
                </label>
                <label>
                    Phone
                    <input ref={userPhone} type='text' name='number' defaultValue = {currentUser[0].phone}  />
                </label>
               <button type='submit' className={styles.button}>Save</button>
            </form>
        </div>
    );
}

export default EditPage;