import React from 'react';

const ItemList = ({title,price,img}) => {
    return (
        <div>
            <img>{img}</img>
            <h1>{title}</h1>
            <h3>{price}</h3>
        </div>
    );
}

export default ItemList;