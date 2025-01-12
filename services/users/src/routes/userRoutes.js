module.exports = (app) => {
    const userController = require('../controllers/userController');
    const router = require('express').Router();

    router.post('/users', userController.createUser);
    router.get('/users/:id', userController.getUser);
    router.put('/users/:id', userController.updateUser);
    router.delete('/users/:id', userController.deleteUser);

    app.use('/api', router);
};