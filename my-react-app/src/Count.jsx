import React, {useState} from 'react'

const Count = () => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount (count+1);
    }
    const decrement = () => {
        setCount (count - 1);
    }

    const reset = () => {
        setCount (0);
    }

  return (
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick = {decrement}>Decrease</button>
        <button className='counter-button' onClick = {increment}>Increase</button>
        <button className='counter-button' onClick = {reset}>Reset</button>

    </div>
  )
}

export default Count