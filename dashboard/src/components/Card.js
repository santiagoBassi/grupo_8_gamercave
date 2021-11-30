import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card(props) {
    return (<div className="container-card">
        <div className="container-name-count">
            <div> {props.name} </div>
            <div> {props.count} </div>
        </div>
        <div className="container-icon"><FontAwesomeIcon icon={props.icon} /></div>
    </div>)
}

export default Card