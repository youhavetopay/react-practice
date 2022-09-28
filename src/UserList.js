import React, { useContext } from "react";

import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {

    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color : user.active ? 'green' : 'pink'
                }}

                onClick={() => {
                    dispatch({
                        type : 'TOGGLE_USER',
                        id : user.id
                    });
                }}
            >{user.userName}</b> <span>({user.email})</span>
            <button onClick={() => {
                dispatch({
                    type : 'REMOVE_USER',
                    id : user.id
                });
            }}>삭제</button>
        </div>
    )

});

function UserList({ users }){

    

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}></User>
            ))}
        </div>
    );

}

export default React.memo(UserList);