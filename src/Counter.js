import React, { useState, useReducer } from "react";


function reducer(state, action){
    switch(action.type){

        case 'INCREMENT':
            return state + 1;
        
        case 'DECREMENT':
            return state - 1;
        
        default:
            return state;

    }
}


function Counter(){

    // useState(초기값) 를 하면 [상태값, 변경함수] 로 나옴 대박 ㅋㅋ
    // const [number, setNumber] = useState(0);
    const [ number, dispatch ] = useReducer(reducer, 0);

    const onIncrease = () => {
        // setNumber(preNumber => preNumber + 1);
        dispatch({ type :  'INCREMENT'});
        console.log('+1');
    }

    const onDecrease = () => {
        // setNumber(preNumber => preNumber - 1);
        dispatch({ type :  'DECREMENT'});
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