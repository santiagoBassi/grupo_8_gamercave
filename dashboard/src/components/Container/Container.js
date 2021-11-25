import { Children } from 'react';
import './Container.css'

function Container(props) {
    return (
        <div>
            <h5>{props.title}</h5>
            <hr/>
            {props.children}
        </div>
    )

}

export default Container;