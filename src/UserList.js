import React, {  } from "react";


const User = React.memo(function User({ user, onRemove, onToggle }) {

    return (
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color : user.active ? 'green' : 'pink'
                }}

                onClick={() => onToggle(user.id)}
            >{user.userName}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )

});

function UserList({ users, onRemove, onToggle }){

    

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>
            ))}
        </div>
    );

}

export default React.memo(UserList);