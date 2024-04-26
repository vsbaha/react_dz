import React, { useState } from 'react';
import UserForm from "./pages/User/UserForm";
import UserList from "./pages/User/UserList";

const App = () => {
    const [userList, setUserList] = useState([]);

    const addUser = (user) => {
        setUserList([...userList, user]);
    };

    const deleteUser = (userToDelete) => {
        const updatedList = userList.filter(user => user !== userToDelete);
        setUserList(updatedList);
    };

    return (
        <div>
            <UserForm onSubmit={addUser}/>
            <UserList users={userList} onDelete={deleteUser}/>
        </div>
    );
};

export default App;
