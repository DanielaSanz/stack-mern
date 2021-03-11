const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({title: 'Get users'})

usersCtrl.getUser = (req, res) => res.json({title: 'Get user'})

usersCtrl.createUser = (req, res) => res.json({message: 'Create user'})

usersCtrl.updateUser = (req, res) => res.json({message: 'Update user'})

usersCtrl.deleteUser = (req, res) => res.json({message: 'Delete user'})

module.exports = usersCtrl;