import React, {useState} from 'react';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent/NewComponent"
import {Button} from "./Button/Button"
import {NewButton} from "./NewButton/NewButton";
import {StateComponent} from "./StateComponent/StateComponent";
import {Money} from './Money/Money';
import {FullInput} from "./FullInput/FullInput";

function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("Stupid btn")
    }
    //lesson 6
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message2'}
    ])

    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message ])
    }
    return (
        <>
            <Header titleHeader={'Header'}/>
            <Body titleBody={'Body'}/>
            <Footer titleFooter={'Footer'}/>
            <NewComponent/>
            <Button/>
            <NewButton name={'MyYoutubeChannel - 1'} callBack={() => Button1Foo("Vasya", 21, 'Minsk')}/>
            <NewButton name={'MyYoutubeChannel - 2'} callBack={() => Button2Foo('Vania')}/>
            <NewButton name={'MyYoutubeChannel - 3'} callBack={Button3Foo}/>
            <StateComponent/>
            <Money/>
            <FullInput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </>
    );
}

export default App;
