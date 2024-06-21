
import React, {useState, useContext, createContext} from 'react'
import ComponentC from './ComponentC'


export const ColorContext = createContext();

function ComponentB() {

  const [color, setColor] = useState('red');
  return (
    <div className='box'>
        <h1 style={{color: color}}>ComponentB</h1>
        <ColorContext.Provider value={color}>
        <ComponentC />
      </ColorContext.Provider>
        
    </div>
  )
}

export default ComponentB