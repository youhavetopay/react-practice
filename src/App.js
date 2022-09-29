import React, { useReducer, useCallback, useRef, useMemo } from 'react';
import './App.scss';

import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './Hook/useInputs';
import Button from './components/Button';

function countActiveUsers(users) {
  console.log('유저 세는 중');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      userName: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      userName: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      userName: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };

    case 'TOGGLE_USER':
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };

    case 'REMOVE_USER':
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

// function App() {

//   // const [{ userName, email }, onChange, reset] = useInputs({
//   //   userName : '',
//   //   email : ''
//   // });

//   const [ state, dispatch ] = useReducer(reducer, initialState);
//   const { users } = state;

//   // const onCreate = useCallback(()=>{

//   // }, [userName, email, reset]);

//   const count = useMemo(()=>countActiveUsers(users), [users]);

//   return (

//   <UserDispatch.Provider value={dispatch}>

//                   <CreateUser
//                   />
//       <UserList users={users}/>
//       <div>활성사용자 수 : {count}</div>
//     </ UserDispatch.Provider>
//   );
// }

function App() {
  const a = 'hello';

  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={() => console.log('클릭함')}>
          BUTTON
        </Button>
        <Button color="blue">BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="gray">
          BUTTON
        </Button>
        <Button size="large" fullWidth color="pink">
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
