import React, {ChangeEvent} from "react";
type InputPropsType = {
    setTitle: (title:string) => void
    title: string
}
export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input onChange={onChangeInputHandler} type="text" value={props.title}/>
    )
}