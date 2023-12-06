import React from 'react'

const ProductContainer = (props) => {
  return (
    <section className='product-section'>
        <h1 className='product-title'>Nuestros productos: </h1>
        <div className='product-container'>
            {props.children}
        </div>

    </section>
  )
}

export default ProductContainer