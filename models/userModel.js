const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now()

        },
        update_at: {
            type: Date,
            required: false
        },
        delete_at: {
            type: Date,
            required: false
        }

    }
)

const UserModel=mongoos.model('User',UserSchema)
module.exports = UserModel