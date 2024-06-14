//updater function = A function passed as an argument to setState(). Allow for safe updates based on the prev state. Used with multiple state updates and asynchronous functions. Good practice to use updater functions 

import React, {useState} from 'react'

const Count = () => {

    const [count, setCount] = useState(0);
    const increment = () => {

        // takes the PENDING state to calculate NEXT state.
        // puts your updater function in a queue (waiting in line)
        // during the next render, it will call them in the same order.

        setCount (c => c+1); //naming convention either write prev infront or use the first letter
        setCount (c => c+1);
        setCount (c => c+1);
    }
    const decrement = () => {
        // uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update
        // React batches together state updates for performance
        // NEXT state becomes the CURRENT state after an update

        setCount (count - 1);
        setCount (count - 1);
        //UPDATE
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