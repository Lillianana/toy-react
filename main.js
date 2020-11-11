import {createElement, Component, render} from "./toy-react"

class MyComponent extends Component{
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render(){
        return <div>
            <h1>MyComponent</h1>
            <span>{this.state.toString}</span>
            {this.children}
        </div>
    }
}



render(<MyComponent id="a" className="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);