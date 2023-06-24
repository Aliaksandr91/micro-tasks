import React from 'react';
import {FilterType} from './Money'

type PropsType = {
    currentMoney:MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void;
}

type MoneyType = {
    banknots:string
    value:number
    number:string
}


export const MoneyHW = (props:PropsType) => {
    console.log(props.currentMoney)
    debugger
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots} </span>
                            <span>{objFromMoneyArr.value} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )

                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>All</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )

}