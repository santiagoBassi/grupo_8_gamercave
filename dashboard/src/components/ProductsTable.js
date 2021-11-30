function ProductsTable() {
    return(
        <div className="container-table">
          <table className="table">
            <tr>
              <th>id</th>
              <th>img</th>
              <th>name</th>
              <th>actions</th>
            </tr>

            <tr>
              <th>
                2
              </th>
              <th>
                <img width="50px" src="/images/produ" alt="" />
              </th>
              <th>
                mouse
              </th>
              <th>
                <div className="container-delete">
                  <form action="/admin/<%= product.id %>/delete?_method=DELETE" method="POST">
                    <button className="delete" type="submit">Borrar</button>
                  </form>
                </div>
                <div className="container-editar">
                  <a href="/admin/<%= product.id %>/edit">Editar</a>
                </div>
              </th>
            </tr>
          </table>
        </div>
    )
}

export default ProductsTable;