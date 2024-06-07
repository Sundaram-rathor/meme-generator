import React from 'react'
import './reactform.css'

function Reactform() {

    const [data,setData] = React.useState({
        Email: "",
        password:"",
        confirmPassword:"",
        checkbox :true
    })
    console.log(data)
    function updated(event){
        setData((prevData)=>{
          return  {
             ...prevData,
             [event.target.name] : event.target.value
          }
        })
    }
    function checkbox(event){
        setData((prevData)=>{
            return {
                ...prevData,
                [event.target.name] : event.target.checked
            }
        })
    }
    function submitted(){
        if(data.password==data.confirmPassword){
             if(data.checkbox){
                console.log('log in successfullly!') 
             }else{
                 console.log('select the checkbox')
             }
        }else{
            console.log('password do not match')
        }
        
    }
    
   
    
   
  return (
    <div className='form-1'>   
        <h1>Register Yourself</h1>
        <input 
            type="Email"
            placeholder='Email' 
            onChange={updated}
            name='Email'
        />
        <input 
            type="password" 
            placeholder='password' 
            onChange={updated}
            name='password'
        />
        <input 
            type="Password" 
            placeholder='confirmPassword' 
            onChange={updated}
            name='confirmPassword'

        />
        <input 
            type="checkbox" 
            id='01' 
            onClick={checkbox}
            checked={data.checkbox}
            name='checkbox'


        />
        <label htmlFor="01">Want to recieve notification</label>
        <button 
           
            
            onClick={submitted}
            
        >
            Submit
        </button>
    </div>
  )
}

export default Reactform