import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (

        <div>
            <h2>Lesson 6</h2>
            <input onChange={onChangeInputHandler} type="text" value={title}/>
            <button onClick={onClickButtonHandler}>+</button>

        </div>


    )
}