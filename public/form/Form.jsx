import React, { useState } from 'react'
import './form.css'
function Form() {
  const [formData, setFormData] = useState({
    topText:"",
    bottomText:"",
    randomImage:"https://tse3.mm.bing.net/th?id=OIP.5a60XnoExzGIQ_7p31pL9AHaEc&pid=Api&P=0&h=180"
  })

  const [allMemes,setAllMemes] = React.useState()

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=> setAllMemes(data.data.memes))
  },[])

  function typed(event){
    setFormData((prevFormData)=>{
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  
  function getRandom(){
    const random = Math.floor(Math.random()*allMemes.length)
    const url = allMemes[random].url

    setFormData(preData=>{
      return {
        ...preData,
        randomImage:url
      }
    })
  } 
  return (
    <div className='form'>
      
           <div className='input'>
             <input 
                type="text" 
                placeholder='Start Text'
                name='topText'
                onChange={typed}
                />
             <input 
                type="text" 
                placeholder='End Text'
                name='bottomText'
                onChange={typed}
                />
           </div>
           <div>
             <button className='btn' onClick={getRandom}>Generate new Meme 😶‍🌫️</button>
           </div>
        <div className='img' style={{ 
                                      backgroundImage: `url(${formData.randomImage})` 
                                     }}
    >
            <div>{formData.topText}</div>
            <div>{formData.bottomText}</div>
        </div>
    </div>
  )
}

export default Form