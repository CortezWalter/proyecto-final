import React, {  useState } from 'react';

function ItemCount (){
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
            <button onClick={() => setContador(contador - 1)}>Restar</button>
            <p>{contador}</p>
        </div>
    );
}


// class ItemCount extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {contador: 0, stock:10};
//     }

//     onIncrease() {
//         this.setState({
//             ...this.state,
//             contador: this.state.contador + 1            
//         })
//     }

//     onDecrease () {
//         this.setState({
//             ...this.state,
//             contador: this.state.contador - 1
//         })
//         this.setState({
//             ...this.stock,
//             stock: this.state.stock + 1
//         });
//     }

//     render () {
//         return (
//             <div>
//                 <button onClick={this.onIncrease.bind(this)}>Agregar</button>
//                 <button onClick={this.onDecrease.bind(this)}>Quitar</button>
//                 <p>Agregaste tantos item al carro: {this.state.contador}</p>
//                 <p>Tu stock es de: {this.state.stock}</p>
//             </div>
//         );
//     }
// }

export default ItemCount;