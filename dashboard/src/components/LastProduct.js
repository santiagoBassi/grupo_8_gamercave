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
    return(
        <div className="container-last-product">
          <h3>Ultimo producto Cargado</h3>
          <hr />
          <div>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        </div>
    )
}

export default LastProduct