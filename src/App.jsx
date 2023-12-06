import { useState } from 'react'
import './App.css'
import Navbar from './componentes/navbar'
import ItemListContainer from './componentes/ItemListContainer'
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
      <Route path='/' element={<ItemListContainer/>}  />
      <Route path='/productos' element={<Productos/>}  />





    </Routes>
    </BrowserRouter>
      <Navbar />

      <ItemListContainer titulo="Bienvenidos a LaPizza" descrip="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic iste delectus natus assumenda, consectetur molestias voluptatum sapiente vitae cum! Sunt quis nobis tempore delectus tenetur et iste quod iusto quidem!" />

      <ItemListContainer titulo="Nuestra Pasión por la Pizza" descrip="Descubre el auténtico sabor de Italia en cada bocado. En La Pizza, estamos dedicados a brindarte la experiencia de pizza más deliciosa y auténtica que puedas encontrar. Con más de 32 años de tradición en la creación de pizzas artesanales, hemos perfeccionado cada aspecto para asegurarnos de que cada pizza que hacemos sea una obra maestra." />

      <ItemListContainer titulo="Variedad para Todos los Gustos" descrip="Ya sea que prefieras la clásica Margarita, una pizza vegetariana repleta de ingredientes frescos o una deliciosa pizza a la parrilla con un toque de ahumado, tenemos algo para todos. Nuestra amplia variedad de opciones incluye opciones sin gluten y veganas para garantizar que todos puedan disfrutar de la experiencia de La Pizza.

" />

    
    </>
  )
}

export default App
