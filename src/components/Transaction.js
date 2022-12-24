import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
const Transaction = (prop) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = prop.transaction.amount < 0 ? '-' : '+';
    return (
        <li className={prop.transaction.amount < 0 ? 'minus' : 'plus'}>
            {prop.transaction.text} <span>{sign}${Math.abs(prop.transaction.amount)}</span><button onClick={() => deleteTransaction(prop.transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction