import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount} from './counterSlice'
import {changeColor} from './colorSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const color = useSelector((state)=>state.color.value)
    const dispatch = useDispatch()
    const [number,setNumber] = useState(0)
    const [colorValue,setColorValue] = useState('')
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color: color}}>{count}</h1>
        <button onClick={()=>dispatch(increment(number))}>Increment</button>
        <button style={{marginLeft:'1rem'}} onClick={()=>dispatch(decrement())}>Decrement</button>
        <br />
        <br />
        <input type="number" placeholder='Enter desired number' onChange={(e)=>setNumber(parseInt(e.target.value, 10))}  />
        <br />
        <br />
        <button onClick={()=>dispatch(incrementByAmount(number))}>incrementBy {number}</button>
        <br /><br />
        <input type="text" placeholder='Enter your desired color' onChange={(e)=>setColorValue(e.target.value)} />
        <button style={{marginLeft:'1rem'}} onClick={()=>dispatch(changeColor(colorValue))}>change Color</button>
    </div>
  )
}

export default Counter