import React from 'react';
import './App.scss';

import Dialog from './components/Dialog';
import Button from './components/Button';

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
  return (
    <div className="App">
      <div className="AppBlock">
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

      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
    </div>
  );
}

export default App;
