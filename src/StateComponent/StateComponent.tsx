import React, {useState} from 'react';
export const StateComponent = () => {
    //let a = 1;
    let [a, setA] = useState(1)
const onClickHandler = () => {
    setA(++a)
    console.log(a)
}
const setZero = () => {
    setA(0)
    console.log(a)
}
     return (
        <div>
            <h2>Lesson 4</h2>
            <div>{a}</div>
            <button onClick={onClickHandler}>number</button>
            <button onClick={setZero}>0</button>
        </div>
    )
}