import PropTyes from 'prop-types';

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