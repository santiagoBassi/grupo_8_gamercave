import CardCategories from "./CardCategories"
import { useEffect, useState } from 'react';

function CountByCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategories(data.countByCategory)
            })
    }, [])


    return (
        <div>
            <h3 className="titulos">Cantidad de Productos Por Categoria</h3>
            <div className="container-countByCategories">
                {categories.length === 0 && <p>Cargando</p>}
                {
                    categories.map((category, i) => {
                        { var key = Object.entries(category) }
                        return <CardCategories category={key[0][0]} count={key[0][1]} />
                    })
                }

            </div>
        </div>)
}

export default CountByCategories