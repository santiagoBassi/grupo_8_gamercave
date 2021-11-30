import CardCategories from "./CardCategories"
import { useEffect, useState } from 'react';

function CountByCategories() {
    const [infoDataBase, setInfoDataBase] = useState({ products: [] });

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfoDataBase(data)
            })
    })


    return (
        <div>
            <h3 className="titulos">Cantidad de Productos Por Categoria</h3>
            <div className="container-countByCategories">
                {infoDataBase.products.length === 0 && <p>Cargando</p>}
                <CardCategories category="Procesador" count="5" />
                <div className="container-card-categories">
                    <div>Procesador</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Disco Rigido</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Auricular</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Mouse</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Teclado</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Memoria Ram</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Monitor</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Cooler</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Fuente</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Mother</div>
                    <div>52</div>
                </div>
                <div className="container-card-categories">
                    <div>Placa de Video</div>
                    <div>52</div>
                </div>

            </div>
        </div>)
}

export default CountByCategories