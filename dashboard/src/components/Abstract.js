import React from 'react';
import Card from './Card'
import { useState } from 'react';
import { useEffect } from 'react';
import { faLaptop, faTh, faUsers } from '@fortawesome/free-solid-svg-icons';





function Abstract() {

    const [infoDataBase, setInfoDataBase] = useState({ products: [] });
    const [infoDataBaseUser, setInfoDataBaseUser] = useState({ users: [] });

    useEffect(() => {
        fetch('/api/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfoDataBase(data)
                fetch('/api/users')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setInfoDataBaseUser(data)
                    })
            })

    },[])


    return (
        <div>
            <h3 className="titulos">Resumen</h3>
            <div className="container-database">
                <Card name="Productos" count={infoDataBase.count} icon={faLaptop} />
                <Card name="Categorias" count="11" icon={faTh} />
                <Card name="Usuarios" count={infoDataBaseUser.count} icon={faUsers} />
            </div>
        </div>
    )


}
export default Abstract;