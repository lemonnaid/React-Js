
import React, {useContext} from 'react'
import ComponentD from './ComponentD'
import { ColorContext } from './ComponentB'

function ComponentC() {

  const color = useContext(ColorContext);
  return (
    <div className='box'>
        <h1 style={{color:color}}>ComponentC </h1>
        <ComponentD/>
    </div>
  )
}

export default ComponentC