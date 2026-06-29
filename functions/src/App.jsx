import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("button clicked");
  }
  return (
    <div> <h1>hare krishna</h1> 

    <button onClick={btnclicked()}> change it now </button>
    </div>
  )
}

export default App