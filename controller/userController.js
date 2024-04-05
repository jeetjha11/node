const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        const userModel = new UserModel(req.body)
        userModel.password = await bcrypt.hash(req.body.password, 10)

        try {

            console.log("hii");
            const user = await userModel.save()
            res.status(201).json({
                message: "User saved successfully",
                data: user
            })
        }
        catch (err) {
            res.status(500).json({
                message: "Error saving user",
                error: err.message
            })
        }

    },
    login: async (req, res) => {

        try {
            const user = await UserModel.findOne({ email: req.body.email })
            if (!user) {
                return res.status(401).json({
                    message: "User not found"
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid password"
                })
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 })
            res.status(200).json({
                message: "User logged in successfully",
                token: token
            })
        }
        catch (err) {
            res.status(500).json({
                message: "Error logging in",
                error: err.message
            })
        }


    },
    get_user_data: async (req, res) => {
        try {
            const data = await UserModel.find()
            res.status(200).json({
                message: "User data fetched successfully",
                data: data
            })
        }
        catch (err) {
            res.status(500).json({
                message: "Error fetching user data",
                error: err.message
            })
        }

    }

}