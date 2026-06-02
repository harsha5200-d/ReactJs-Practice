import React from 'react'

const Card = (props) =>{
    return(
    <div className="card"> 
        <img src={props.src} alt="madhava "></img>
        <h1> {props.user} </h1>
        <button> {props.age} </button>
      </div>
    )
}

export default Card