import React from 'react'

function Keypad() {
  return (
    <div>
        <form action="">
            <input type="password" onChange = {()=>console.log('Entering password...')}/>
        </form>
    </div>
  )
}

export default Keypad
