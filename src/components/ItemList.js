function ItemList () {
    var productos = [
        {'id': 1,'name': 'yerba', 'description': 'yerba taragui', 'stock': 16},
        {'id': 1,'name': 'cerveza quilmes', 'description': '2 L', 'stock': 9}
    ];
    
    let promesa = new Promise(
        (resolve, reject) => {setTimeout(function(){
            resolve(productos);
        ¡Todo salió bien!}, 3000);});
        
        promesa.then(console.log);
}