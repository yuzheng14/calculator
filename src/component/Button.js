import PropTypes from 'prop-types';
import "../styles/Button.css"

/**
 * 数字及运算符按钮函数组件
 *
 * @export
 * @return <div><button/></div>
 */
export default function Button(props) {
    const className = `component-button ${props.orange ? 'orange' : ''
        } ${props.wide ? 'wide' : ''
        }`;

    return (
        <div className={className}>
            <button>{props.name}</button>
        </div>
    )

}

Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
}