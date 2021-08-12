import { reject } from 'q';
import React from 'react';

    const productos = [
        {id: "1", title: "Pan de queso", price: "500", img: "google.com.ar", category: "pan"},
        {id: "2", title: "Pan de Hierbas", price:"400", img: "url", category: "pan"},
        {id: "3", title: "Pan de Molde", price:"300", img:"url", category: "pan"},
        {id: "4", title: "Bundin de Naranaja", price: "300", img: "url", category: "pan"},
        {id: "5", title: "Bundin de Limon", price: "250", img: "url", category: "pan"},
        {id: "6", title: "Bundin de Vainilla", price: "200", img: "url", category: "pan"}
    ];

    const task = () => new Promise ((resolve,reject) => {
        setTimeout (() => {
            resolve(pan, budin);
        }, 2000);
    });

    task()
        .then (
            (result) => {
                console.log(result);
            },
        );

const Item = () => {
    return productos.map (prod => {
        return (
            <ItemList key={prod.id} title={prod.title} price={prod.price} img={prod.img} />
        );
    });
};
    


export default Item;