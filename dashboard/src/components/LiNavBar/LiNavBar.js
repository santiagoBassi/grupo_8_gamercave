import './LiNavBar.css'
import { Link } from 'react-router-dom'

function LiNavBar(props) {
    return (
        <li className="itemNavBar"><Link to={props.route} exact="true">{props.name}</Link></li>
    )

}

export default LiNavBar;