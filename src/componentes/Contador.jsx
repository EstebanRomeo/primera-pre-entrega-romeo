import React from 'react'
import { useState } from 'react'


function Contador(){
    const [contador, setContador] = useState(0);

    console.log(`El contador va: ${contador}`);

  return (
    <div>
        <button onClick={()=>setContador ( contador + 1)}>Carrito 🛒 {contador}</button>
    </div>
  )

}

export default Contador