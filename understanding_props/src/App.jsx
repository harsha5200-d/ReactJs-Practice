import React from 'react'
import "./index.css"
import Card from "./components/Card"

const App = () =>{
  return (
    <div className='parent'>
      
      <Card user='krishna' age={16}/>
      <Card user='madhava' age={19}/>
      <Card user='govinda' age={17}/>

    </div>
  )
 
}

export default App