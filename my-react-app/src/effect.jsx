//useEffect() = React Hook that tells react DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})     // Runs after every re-render
// 2. useEffect(() => {}, [])  // Runs onlt on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react'

function EffectComp(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count , color]) 

    function addCount(){
        setCount( c => c + 1);
    }
    function subCount(){
        setCount( c => c - 1);
    }

    function changeColor(){
        setColor(c=> c === "green" ? "red" : "green");
    }
    return( <>
       <p style={{color:color}}> Count: {count}</p>
       <button onClick={addCount}>Add</button>
       <button onClick={subCount}>Subtract</button>
       <br/>
       
       <button onClick={changeColor}>Change color</button>
       </>
    );

}

export default EffectComp


