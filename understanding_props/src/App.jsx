import React from 'react'
import "./index.css"
import Card from "./components/Card"

const App = () =>{
  return (
    <div className='parent'>

      <Card user='krishna' age={16} src="https://images.unsplash.com/photo-1660280037297-a3b5e79a3d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNrb24lMjBrcmlzaG5hfGVufDB8fDB8fHww" />
      <Card user='madhava' age={19} src="https://images.unsplash.com/photo-1621355310264-03958a95f6d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlza29uJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user='govinda' age={17} src=" https://images.unsplash.com/photo-1641913625440-158406784a9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
 
}

export default App