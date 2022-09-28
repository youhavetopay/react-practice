import React, {useState} from "react";

function Counter(){

    // useState(초기값) 를 하면 [상태값, 변경함수] 로 나옴 대박 ㅋㅋ
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(preNumber => preNumber + 1);
        console.log('+1');
    }

    const onDecrease = () => {
        setNumber(preNumber => preNumber - 1);
        console.log('-1');
    }

    return(
        <div>
            <h1>{number}</h1>

            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );

}

export default Counter;