import './ItemInfoDataBase.css'

function ItemInfoDataBase(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.cuantity}</p>
        </div>
    )

}

export default ItemInfoDataBase;