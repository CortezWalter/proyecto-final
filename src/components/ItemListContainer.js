import React from "react";

class ItemListContainer extends React.Component {
    render () {
        return <div style={{fontSize:25, fontWeight:"bolder", color:"green", padding:25}}>
            {this.props.Mensaje}
        </div>
    } 
}

export default ItemListContainer;