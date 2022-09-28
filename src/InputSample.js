import React, { useState, useRef } from "react";

function InputSample(){

    const [ inputs, setInputs ] = useState({
        name : '',
        nickName : ''
    });

    const { name, nickName } = inputs;

    const nameInput = useRef();
    const nickNameInput = useRef();

    const onChange = (e) => {
        // e.target 에서 요소의 name 과 입력값을 가져옴
        const { value, name } = e.target;

        // inputs[name] = value 이런 식으로 하면 안됨 !!!
        setInputs({
            ...inputs, // 기존의 inputs 객체를 복사
            [name] : value // name 키를 가진 값을 입력값으로 변경
        });
    }

    const onReset = () => {
        setInputs({
            name : '',
            nickName : ''
        });

        nickNameInput.current.focus();
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} ref={nickNameInput}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    );

}


export default InputSample;