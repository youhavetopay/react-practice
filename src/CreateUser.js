import React from "react";

function CreateUser({ userName, email, onChange, onCreate }){

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