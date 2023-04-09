import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/BonusSlices';
const Bonus = () => {
   const bonus=useSelector(state=>state.bonus.points);
   const dispatch=useDispatch()
    return (
        <div className='Bonus'>
            <h1>Bonus Components:</h1>
            <h1>Points:{bonus}</h1>
            <button onClick={()=>dispatch(increment())}> Increment:+</button>
            <button>Decrement:-</button>
        </div>
    )
}

export default Bonus
