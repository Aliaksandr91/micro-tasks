import React, {useState} from 'react';
import { MoneyHW } from './MoneyHW';



export type FilterType= 'all' | 'Dollars' | 'RUBLS'
export const Money = () => {




    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('all')

    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }
    const onClickFilterHandler = (nameButton:FilterType) => {
        setFilter(nameButton)
    }


    return (
        <div>
            <h2>Lesson 5</h2>
            <MoneyHW currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {currentMoney.map((objFromMoneyArr, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>*/}
            {/*                <span>{objFromMoneyArr.banknots} </span>*/}
            {/*                <span>{objFromMoneyArr.value} </span>*/}
            {/*                <span>{objFromMoneyArr.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}

            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('all')}>All</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>*/}
            {/*</div>*/}

        </div>
    )
}