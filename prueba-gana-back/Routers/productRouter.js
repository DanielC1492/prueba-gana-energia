const routerProduct = require('express').Router();
const productController = require('../Controllers/productController');
const productSchema = require('../Models/productModel');

//API use

routerProduct.post("/add", async(req, res) => {
    try  {
        const id = await productController.addProduct(req.body)
        res.json(id);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


routerProduct.get("/products", async(req, res) => {
    try  {
        res.json(await productController.findAllProducts())
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerProduct.get("/product/:id", async(req, res) => {
    try  {
        const id = req.params.id;
        res.json(await productController.findById(id))
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});


routerProduct.put('/product/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await productController.updateProduct(id, new productSchema(req.body.id)));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerProduct.delete('/product/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await productController.deleteProduct(id);
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = routerProduct;