import React, { useRef, useContext, useCallback } from "react";

import useInputs from "./Hook/useInputs";
import { UserDispatch } from "./App";

function CreateUser({  }){

    const [{ userName, email }, onChange, reset] = useInputs({
        userName : '',
        email : ''
    });

    const nextId = useRef(4);
    const dispatch = useContext(UserDispatch);
    
    const onCreate = () => {
        dispatch({
            type : 'CREATE_USER',
            user : {
              id : nextId.current,
              userName,
              email
            }
        });
      
        reset();
    
        nextId.current += 1;
    }

    return (
        <div>
            <input
                name="userName"
                placeholder="이름"
                onChange={onChange}
                value={userName}
            ></input>

            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            ></input>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}


export default React.memo(CreateUser);