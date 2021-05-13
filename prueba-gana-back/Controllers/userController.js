const User = require('../Models/userModel');
const userJWT = require('../Middleware/JWTuser');
const bcrypt = require('bcryptjs');




class Customer {

    constructor() {}

     //POST Create user and hashing password

     async addUser(newUser) {

        user.password = await bcrypt.hash(user.password, 8);
        return User.create(newUser);
    };

    //POST Login with some error handling

    async userLogin(nickname, password){

        const user = await User.findOne({nickname});
        if(!user) {
            throw new Error('Unable to find user')
        }
        if(!await bcrypt.compare(password, user.password)) {
            throw new Error('Wrong password')
        };
        return {userJWT, user}      

    };


    //GET users by name

    async findAllUsers(userArray) {
        return User.find(userArray);
    };

    //GET Users by ID

    async findById(id) {
        return User.findById(id);
    };

   
    //PUT Update user

    async updateUser(customer) {
        return User.findByIdAndUpdate(customer);
    }

    //DELETE user by ID

    async deleteUser({ id: id }) {
        const idFound = User.findOneAndDelete({ id: id })
        return idFound.remove()
    };



}


let userController = new Customer();
module.exports = userController;