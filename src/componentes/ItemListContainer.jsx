import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div className='itemListContainer'>
      <div className='grow1'>
        <h1>{props.titulo}</h1>
        <p>{props.descrip}</p>
      </div>
    </div>
  )
}

export default ItemListContainer