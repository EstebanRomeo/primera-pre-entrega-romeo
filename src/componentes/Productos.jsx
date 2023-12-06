import './productContainer.css';
import React, { useEffect, useState } from 'react';
import data from './product.json'; 

const Productos = ({ selectedCategory }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = () => {
      try {
        const filteredProductos = selectedCategory
          ? data.filter(producto => producto.categoria === selectedCategory)
          : data;

        setProductos(filteredProductos);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, [selectedCategory]);

  return (
    <div>
      <h2>{selectedCategory ? `Productos de ${selectedCategory}` : 'Todos los productos'}</h2>
      {productos.map(producto => (
        <div key={producto.id}>
          {/* ... código del producto ... */}
        </div>
      ))}
    </div>
  );
};

export default Productos;