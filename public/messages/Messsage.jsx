import React from 'react'

function Messsage() {
    const [messages, setMessage] = React.useState(["a","b"]);
  return (
    <div>
        {messages.length > 0 ? 
        `you have ${messages.length} unread ${messages.length==1 ? "message" : "messages"}` :
         "you are all caught up"}
    </div>
  )
}

export default Messsage