const usersCtrl = {};

const UserModel = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users)
}

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body; 
    const newUser = new UserModel({username});
    await newUser.save();
    res.json({message: 'User created'})
}

usersCtrl.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    console.log(req.params.id)
    res.json(user)
    console.log(user);
}

usersCtrl.updateUser = async (req, res) => {
    const { username } = req.body;
    await UserModel.findOneAndUpdate(req.params.id, { username })
    res.json({message: 'User updated'})
}

usersCtrl.deleteUser = async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted'})
}

module.exports = usersCtrl;