import { useState, useEffect } from 'react';


function ProductsTable() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
    <div className="container-table">
      <table className="table">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>actions</th>
        </tr>

        {
          products.map(product => {
            return(<tr>
              <th>
                {product.id}
              </th>
              
              <th>
                {product.name}
              </th>
              <th>
                <div className="container-delete">
                  <form action="http://localhost:3030/admin/{product.id}/delete?_method=DELETE" method="POST">
                    <button className="delete" type="submit">Borrar</button>
                  </form>
                </div>
                <div className="container-editar">
                  {<a href="http://localhost:3030/admin/+{product.id}/edit">Editar</a>}
                </div>
              </th>
            </tr>
            )
          })

        }
      </table>
    </div>
  )
}

export default ProductsTable;