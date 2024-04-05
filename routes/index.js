const express=require('express');
const { model } = require('mongoose');
const { register, login, get_user_data } = require('../controller/userController');
const { validateUserData,validateLoginData } = require('../util/userValidators');
const {AuthenticatedUser}=require('../util/auth')


const routes=express.Router();


routes.post('/register',validateUserData ,register);

routes.post('/login',validateLoginData,login);

// routes.get('/getAllUsers',AuthenticatedUser,get_user_data);

routes.get('/get_data',get_user_data)

module.exports = routes;


