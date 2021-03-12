const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        //para el espacio entre palabras
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema);