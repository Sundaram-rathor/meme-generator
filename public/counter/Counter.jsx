import React from 'react'
import './counter.css'

function Counter() {
    const [count ,setCount]= React.useState(0);
    
    function inc(){
        setCount(prevCount=>prevCount+1);
    }
    function dec(){
        setCount(prevCount=>prevCount-1);
    }
  return (
    <div className='counter'>
        <div className='count' onClick={dec}>-</div>
        <div className='count-1'>{count}</div>
        <div className='count' onClick={inc}>+</div>
    </div>
  )
}

export default Counter