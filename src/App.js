import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import ListPage from './components/ListPage';
import AddUsers from './components/AddUser/AddUsers';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import EditPage from './components/EditPage/EditPage';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
    let [list, setList] = useState([]);
    let[editUser, setEditUser] = useState(null);

    const showAllList = function(data){
        if (Array.isArray(data)) {
           setList(data);
          } else if(typeof data === "object" && data !== null) {
            setList([...list, data]);
          } 
    }

    useEffect(() => {
        if (editUser !== null) {
            const updatedList = list.map(item => {
              if (item.id === Number(editUser.id)) {
                item.name = editUser.name;
                 item.phone = editUser.phone;
              }
              return item;
            });
            setList(updatedList);
          }
    },[editUser])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);

const editUserWrap = function(obj){
    setEditUser(obj);
}
    return (
        <div className='App'>
            <BrowserRouter>
            <Routes>
                <Route path = '/' element = 
                {<div className='btnWrap'>
               <Link to="showlist"> <Button value='Show all list' /></Link>
               <Link to="adduser"> <Button value='Add the user' /></Link>
               </div>}/>
                 <Route path = 'adduser' element = {<AddUsers showAllList={showAllList}/>}/>
                 <Route path = 'showlist' element = {<ListPage list={list} showAllList={showAllList}/> }/>
                 <Route path = 'editpage/:userId' element = {<EditPage editUserWrap={editUserWrap} list = {list} />}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
