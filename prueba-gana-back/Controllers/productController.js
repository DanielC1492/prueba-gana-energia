const Product = require('../Models/productModel');


class ProductController {
 
    //POST Create a new product

    async addProduct(product){
        
        return Product.create(product);

    }

    //GET product by name

    async findAllProducts(productArray) {
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


const productController = new ProductController;
module.exports = productController;