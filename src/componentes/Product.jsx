import React from 'react'
import BtnAddCart from './BtnAddCart'
import './product.css';

const Product = (props) => {
  return (
    <div className='Product'>
        <img src="https://picsum.photos/200" alt='product' className='product-img'/>
        <h2 className='product-title'>{props.name}</h2>
        <div className='product-details'>
            <p className='product-ingred'>{props.ingred}</p>
            <p className='price'>${props.price}</p>
        </div>
        <BtnAddCart />
    </div>
  )
}

export default Product