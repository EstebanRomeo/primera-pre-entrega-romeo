import React from 'react'
import './productContainer.css';



const Productos = (props) => {

  return (
    <div>
    <section className='product-section'>
    <h1 className='product-title'> Nuestras pizzas: </h1>
    <div className='product-container'>
        {props.children}
    </div>

</section>




<ProductContainer>
      {data.map( product => 
        <Product
          key={product.nombre}
          name={product.nombre}
          ingred={product.ingredientes}
          price={product.precio}

        />
      )}



      
    </ProductContainer>
    
</div>
  )


  
}

export default Productos