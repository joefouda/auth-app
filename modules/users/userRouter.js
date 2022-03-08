const express = require('express');
const userRouter = express.Router();

const { logIn } = require('./userController')
const { signUp } = require('./userController')
const { checkAdminRole } = require('./userController')

const { errorHandler } = require('../middlewares')

//user sign up
userRouter.post('/signUp', signUp)

//user log in
userRouter.post('/logIn', logIn)

//user log in
userRouter.get('/check-admin', checkAdminRole)

// error handling middleware
userRouter.use(errorHandler)


module.exports = userRouter;