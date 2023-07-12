class ProductManager{
    productos= []
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
    addProduct(title, description, price, thumbnail, code, stock){
        //Valido que existan todas las propiedades
        if(!title || !description || !price ||!code || !stock){
            let error = new Error("Missing product properies, all properties must be declared.")
            console.error(error)
            return //Esta bien hacerlo de esta manera? No se me ocurrio otra forma de almacenar y enviar el error.
        }//Valido que el codigo no exista.
        if (this.productos.some((product) => product.code === code)) {
            let error =  new Error("Product code already exists, please change it and try again.");
            console.error(error)
            return
        }
    const newProduct = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock
    }
    if (this.productos.length ===0){//ID autoincrementable, esto me lo copie de una profe que tuve.
        newProduct.id = 1;
    }
    else{
        newProduct.id = this.productos[this.productos.length-1].id+1
    }
    this.productos.push(newProduct)
    }
    getProducts(){
        console.log(this.productos)
    }
    getProductsById(id){
        const product = this.productos.find((product) => product.id === id);
        if(product === undefined || null){//Entiendo que hay mas formas de validarlo pero solo se me ocurrio esto.
            let error = new Error("ID Not Found, please search for another ID")
            console.error(error)
            return
        }
        console.log(product)
    }
}

let productManager = new ProductManager //Valide por mi cuenta para ver que funciona.
console.log("getProducts: ")
productManager.getProducts()
console.log("addProduct: ")
productManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log("getProducts: ")
productManager.getProducts()
console.log("addProduct: ")
productManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log("getProducts: ")
productManager.getProducts()
console.log("getProductsById: 1")
productManager.getProductsById(1)
console.log("getProductsById: 2")
productManager.getProductsById(2)
//node index.js 