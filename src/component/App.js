import { Component } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.css"
import calculate from "../logic/calculate";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName))
    }

    render() {
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        )
    }
}