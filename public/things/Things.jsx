import React from 'react'
import './Things.css'

function Things() {
    const[things,setThings] = React.useState(["things 1", "things 2"]);
    const thingItems =  things.map(key=><p>{key}</p>);
    function addOne(){
        setThings(
            (prevThing)=>{
                return [...things,`things ${things.length+1}`]
            }
        )
    }
  return (
    <div>
       <button onClick={addOne}>Add item</button>
       <div className='thing'>
        {thingItems}
       </div>
    </div>
  )
}

export default Things