import Button from "./Button";
import "../styles/ButtonPanel.css"

/**
 * 所有按钮的 Panel
 *
 * @export
 * @param {*} props React 传递的属性
 * @return {*} 组件 ButtonPanel
 */
export default function ButtonPanel(props) {
    return(
        <div className="component-button-panel">
            <div>
                <Button name="AC" clickHandler={props.clickHandler}/>
                <Button name="+/-" clickHandler={props.clickHandler}/>
                <Button name="%"clickHandler={props.clickHandler}/>
                <Button name="÷" clickHandler={props.clickHandler} orange/>
            </div>
            <div>
                <Button name="7" clickHandler={props.clickHandler}/>
                <Button name="8" clickHandler={props.clickHandler}/>
                <Button name="9"clickHandler={props.clickHandler}/>
                <Button name="×" clickHandler={props.clickHandler} orange/>
            </div>
            <div>
                <Button name="4" clickHandler={props.clickHandler}/>
                <Button name="5" clickHandler={props.clickHandler}/>
                <Button name="6"clickHandler={props.clickHandler}/>
                <Button name="-" clickHandler={props.clickHandler} orange/>
            </div>
            <div>
                <Button name="1" clickHandler={props.clickHandler}/>
                <Button name="2" clickHandler={props.clickHandler}/>
                <Button name="3"clickHandler={props.clickHandler}/>
                <Button name="+" clickHandler={props.clickHandler} orange/>
            </div>
            <div>
                <Button name="0" clickHandler={props.clickHandler} wide/>
                <Button name="." clickHandler={props.clickHandler}/>
                <Button name="=" clickHandler={props.clickHandler} orange/>
            </div>
        </div>
    )
}