import { useState } from 'react'
import './App.css'
import Navbar from './componentes/navbar'
import ItemListContainer from './componentes/ItemListContainer'
import ProductContainer from './componentes/ProductContainer'
import Product from './componentes/product'
import data from './componentes/product.json' //json de pizzas propio
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Promos from './componentes/Promos';
import Nosotros from './componentes/Nosotros'
import Contacto from './componentes/Contacto'
import Productos from './componentes/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      

      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/nosotros' element={<Nosotros/>} />
      <Route path='/promos' element={<Promos/>} />
      <Route path='/productos' element={<Productos/>}  />
      <Route path='/' element={<ItemListContainer/>}  />






    </Routes>
    </BrowserRouter>
    
      <Navbar />


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
    
    </>
  )
}

export default App
