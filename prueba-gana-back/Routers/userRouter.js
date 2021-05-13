const routerUser = require("express").Router();
const userController = require("../Controllers/userController");
const movieSchema = require("../Models/userModel");

//API use
routerUser.get("/users", async(req, res) => {
    try  {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.get("/user/:id", async(req, res) => {
    try  {
        const id = req.params.id;
        res.json(await userController.findById(id))
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.post("/user", async(req, res) => {
    try  {
        const id = await userController.addUser(req.body)
        res.json(id);
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.put('/user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.updateUser(id, new userSchema(req.body.id)));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.delete('/user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = routerUser;