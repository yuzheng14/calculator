import PropTyes from 'prop-types';
import "../styles/Display.css"

export default function Display(props){
    return(
        <div className="component-display">
            <div>{props.value}</div>
        </div>
    )
}

Display.propTypes={
    value:PropTyes.string,
}