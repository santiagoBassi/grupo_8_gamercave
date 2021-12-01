function CardCategories(props) {
    return(
        <div className="container-card-categories">
                <div>{props.category}</div>
                <div className="count">{props.count}</div>
            </div>
    )
}

export default CardCategories