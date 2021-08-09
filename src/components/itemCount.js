import React from 'react';

class itemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contador: 0, stock:10};
    }

    onIncrease() {
        this.setState = ({contador: this.state.contador +1});
        this.setState = ({stock: this.state.stock -1});
    }

    onDecrease () {
        this.setState = ({contador: this.state.contador -1});
        this.setState = ({stock: this.state.stock +1});
    }

    render () {
        return (
            <div>
                <button onClick={this.onIncrease.bind(this)}>Agregar</button>
                <button onClick={this.onDecrease.bind(this)}>Quitar</button>
                <p>{this.state.contador}</p>
                <p>{this.state.stock}</p>
            </div>
        );
    }
}

export default itemCount;