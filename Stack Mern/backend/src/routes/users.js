const { Router } = require('express');
const router = Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser)

//http://localhost:4000/api/users/1
router.route('/:id')
    .delete(deleteUser)

module.exports = router;
