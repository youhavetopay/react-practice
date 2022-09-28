import React, { useReducer, useCallback, useRef, useMemo } from 'react';
import './App.css'

import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './Hook/useInputs';


function countActiveUsers(users){
  console.log('유저 세는 중');
  return users.filter(user => user.active).length;
}

const initialState = {
  users : [
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
  ]
}

function reducer(state, action){

  switch(action.type){
    case 'CREATE_USER':
      return {
        users : state.users.concat(action.user)
      };
    
    case 'TOGGLE_USER':
      return {
        users : state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active} : user
        )
      }
    
    case 'REMOVE_USER':
      return {
        users : state.users.filter(user => 
          user.id !== action.id
        )
      }
    
    default:
      return state;
  }

}

export const UserDispatch = React.createContext(null);

function App() {

  // const [{ userName, email }, onChange, reset] = useInputs({
  //   userName : '',
  //   email : ''
  // });

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;
  


  // const onCreate = useCallback(()=>{
    
  // }, [userName, email, reset]);


  const count = useMemo(()=>countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
    
      <CreateUser 
      />
      <UserList users={users}/>
      <div>활성사용자 수 : {count}</div>
    </ UserDispatch.Provider>
  );
}

export default App;
