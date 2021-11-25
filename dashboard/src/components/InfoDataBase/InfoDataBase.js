import './InfoDataBase.css'
import ItemInfoDataBase from '../ItemInfoDataBase/ItemInfoDataBase';

function InfoDataBase() {
    return (
        <div>
            <ItemInfoDataBase title="prodcutos" cuantity="20"/>
            <ItemInfoDataBase title="usuarios"  cuantity="85"/>
            <ItemInfoDataBase title="categorias" cuantity="9"/>
        </div>
    )

}

export default InfoDataBase;