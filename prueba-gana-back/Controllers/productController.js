const Product = require('../Models/productModel');



class Product {

    constructor() {}

     //POST Create a new product

     async addProduct(newProduct) {
        return Product.create(newProduct);
    };


    //GET product by name

    async findAllProduct(productArray) {
        return Product.find(productArray);
    };

    //GET product by ID

    async findById(id) {
        return Product.findById(id);
    };

   

    //PUT Update product

    async updateProduct(product) {
        return Product.findByIdAndUpdate(product);
    }

    //DELETE product by ID

    async deleteProduct({ id: id }) {
        const idFound = Product.findOneAndDelete({ id: id })
        return idFound.remove()
    };



}


let productController = new Product();
module.exports = productController;