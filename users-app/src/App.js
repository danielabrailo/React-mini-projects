import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age:uAge, id: Math.random().toString()}];
    });
  };

  let content = (
    <p style={{ textAlign: 'center', color: 'white' }}>No user found. Try adding a new one! </p>
  );

  if (usersList.length > 0 ) {
    content = (<UsersList users={usersList}/>);
  };


  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        {content}
    </div>
  );
};

export default App;
