import React from 'react'

const Card = (props) =>{
    return(
    <div className="card"> 
        <img src="https://images.unsplash.com/photo-1621355310264-03958a95f6d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlza29uJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
        <h1> {props.user} </h1>
        <button> {props.age} </button>
      </div>
    )
}

export default Card