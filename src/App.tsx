import React from 'react';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent/NewComponent"
import {Button} from "./Button/Button"
import {NewButton} from "./NewButton/NewButton";
import {StateComponent} from "./StateComponent/StateComponent";
import { Money } from './Money/Money';
function App() {
    const Button1Foo = (subscriber:string, age:number, address:string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("Stupid btn")
    }
    return (
        <>
            <Header titleHeader={'Header'}/>
            <Body titleBody={'Body'}/>
            <Footer titleFooter={'Footer'}/>
            <NewComponent/>
            <Button/>
            <NewButton name={'MyYoutubeChannel - 1'} callBack={()=>Button1Foo("Vasya", 21, 'Minsk')}/>
            <NewButton name={'MyYoutubeChannel - 2'} callBack={()=>Button2Foo('Vania')}/>
            <NewButton name={'MyYoutubeChannel - 3'} callBack={Button3Foo}/>
            <StateComponent/>
            <Money/>
        </>
    );
}

export default App;
