const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');



class Customer {


     //POST Create user and hashing password

     async addUser(user) {
        const userExist = await User.findOne({user});
        if(userExist) {
            return ''
        }
        user.password = await bcrypt.hash(user.password,5)

        return User.create(user)
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
        return {user};      

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

    async deleteUser(id) {
        const idFound = User.findByIdAndRemove(id)
        return idFound
    };



}


let userController = new Customer();
module.exports = userController;