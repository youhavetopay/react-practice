import React, { useState, useRef, useMemo, useCallback } from 'react';
import './App.css'

import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users){
  console.log('유저 세는 중');
  return users.filter(user => user.active).length;
}


function App() {

  // const text = 'IZONE';

  // const style = {
  //   backgroundColor : 'black',
  //   color : 'aqua',
  //   fontSize : 24,
  //   padding: '1rem'
  // }

  const [inputs, setInputs] = useState({
    userName : '',
    email : ''
  });

  const { userName, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs( inputs => ({
      ...inputs,
      [name] : value
    }));
  }, []);

  const [ users, setUsers ] = useState([
    {
        id: 1,
        userName: 'velopert',
        email: 'public.velopert@gmail.com',
        active : true
      },
      {
        id: 2,
        userName: 'tester',
        email: 'tester@example.com',
        active : false
      },
      {
        id: 3,
        userName: 'liz',
        email: 'liz@example.com',
        active : false
      }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {

    const user = {
      id : nextId.current,
      userName,
      email
    };

    // setUsers([...users, user]);
    setUsers(users => users.concat(user));

    setInputs({
      userName : '',
      email : ''
    });

    nextId.current += 1;
  }, [userName, email]);

  const onRemove = useCallback((id) =>{
    setUsers( users => 
      users.filter(user => user.id !== id)
    )
  }, []);

  const onToggle = useCallback((id) =>{
    setUsers( users => 
      users.map(user => user.id === id ? {...user, active : !user.active} : user)
    )
  }, []);

  const count = useMemo(()=> countActiveUsers(users), [users]);

  return (
    <>
      {/* <Hello name="react" color="red" isSpecial></Hello>
      <Hello color="pink"></Hello>
      <div style={style}>{text}</div>
      <div className="gray-box"></div>


      <Counter></Counter>

      <br></br>
      <InputSample></InputSample>

      <br></br>
      <br></br>
      <br></br> */}
      <CreateUser
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
