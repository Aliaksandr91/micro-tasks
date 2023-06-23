import React from "react";

export const Button = () => {
    // const myFirstSubscriber = () => {
    //     console.log('Hello Iam Vasya')
    // }
    // const mySecondSubscriber = () => {
    //     console.log('Hello Iam Ivan')
    // }

    const onClickHandler = (name:string) => {
        console.log(name)
    }

    const foo1=()=> {
        console.log(100200)
    }
    const foo2=(num:number)=> {
        console.log('100200')
    }
    return (

        <div>
            <button onClick={(event) => {
                console.log('Hello')
            }}>MyYoutubeChannel-1
            </button>
            <button onClick={(event)=>onClickHandler('Vasya')}>MyYoutubeChannel-2
            </button>
            <button onClick={()=>onClickHandler('Ivan')}>MyYoutubeChannel-3
            </button>
            <button onClick={foo1}>Btn4
            </button>
            <button onClick={(event)=>foo2(100200)}>Btn5
            </button>
        </div>
    )
}