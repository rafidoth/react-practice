import React, { useState } from 'react';
import Container from './components/Container.styled';
import Card from './components/Card.styled';
import UserInput from './components/UserInput';
import UserList from './components/UserList';
import EmptyInputError from './components/EmptyInputError';

function App() {

  const [users, setUsers] = useState([
      { 
        'username' : 'rafi123',
        'age' : 22,
      },
      {
        'username' : 'l000series',
        'age' : 24,
      },
      {
        'username' : 'noOne',
        'age' : 19,
      }
    ]);

    const [isValid, setIsValid] = useState(true);
  
  const addUser = user =>{
    setUsers([
      ...users,
      { 
        'id': Math.floor(Math.random()*100),
        'username' : user['username'],
        'age' : user['age'],
      }
    ])
  }


  const deleteUser = username =>{
    let updatedUsers = users.filter(user=> user['username'] !== username);
    setUsers(updatedUsers);
  }

  const showError = () =>{
    setIsValid(false);
  }
  const closeError = () =>{
    setIsValid(true);
  }

  return (
    <div>
       <Container>
          <Card>
            <UserInput addUser = {addUser} showError= {showError}/>
          </Card>
          <Card>
            <UserList users={users} deleteUser= {deleteUser}/>
          </Card>
          {isValid ? <div></div>: <EmptyInputError closeError ={closeError} />}
       </Container>
    </div>
  )
}

export default App
