import React from 'react';

class ItemCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contador: 0, stock:10};
    }

    onIncrease() {
        this.setState({
            ...this.state,
            contador: this.state.contador + 1
        })
        this.setState({
            ...this.stock,
            stock: this.state.stock - 1
        });
    }

    onDecrease () {
        this.setState({
            ...this.state,
            contador: this.state.contador - 1
        })
        this.setState({
            ...this.stock,
            stock: this.state.stock + 1
        });
    }

    render () {
        return (
            <div>
                <button onClick={this.onIncrease.bind(this)}>Agregar</button>
                <button onClick={this.onDecrease.bind(this)}>Quitar</button>
                <p>Agregaste tantos item al carro: {this.state.contador}</p>
                <p>Tu stock es de: {this.state.stock}</p>
            </div>
        );
    }
}

export default ItemCount;