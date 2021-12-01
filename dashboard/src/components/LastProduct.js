import { useState, useEffect } from 'react';

function LastProduct(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/api/products/61')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProduct(data)
      })
  }, [])
  return (
    <div className="container-last-product">
      <h3 className= "titulo-ultimo-producto">Ultimo producto Cargado</h3>
      <hr />
      <div className= "container-card">
        <div className= "container-name-count">Id: {product.id}</div>

        <div>Nombre: {product.name}</div>
        <div>Precio: ${product.price}</div>
      </div>
    </div>
  )
}

export default LastProduct