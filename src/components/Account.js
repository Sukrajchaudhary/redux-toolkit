import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../slices/accountSlices'
import { fetchUserById } from '../slices/accountSlices'

const Account = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const amount = useSelector(state => state.account.amount)
    return (
        <div className="Accoint">
            <p>Account Components:</p>
            <p>Amount:{amount}</p>
            <input type="text"  onChange={(e) => setValue(+e.target.value)} />
            <button onClick={() => dispatch(increment())}> Increment:+</button>
            <button onClick={() => dispatch(decrement())}>Decrement:-</button>
            <button onClick={() => dispatch(incrementByAmount(value))}>Increment by:</button>
            <button onClick={() => dispatch(fetchUserById(2))}>Get User:</button>
 
        </div>
    )
}

export default Account
