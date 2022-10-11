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
                <Button name="AC" />
                <Button name="+/-" />
                <Button name="%"/>
                <Button name="÷" orange/>
            </div>
            <div>
                <Button name="7" />
                <Button name="8" />
                <Button name="9"/>
                <Button name="×" orange/>
            </div>
            <div>
                <Button name="4" />
                <Button name="5" />
                <Button name="6"/>
                <Button name="-" orange/>
            </div>
            <div>
                <Button name="0" wide/>
                <Button name="." />
                <Button name="=" orange/>
            </div>
        </div>
    )
}