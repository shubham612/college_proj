const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNo: {
        type: String,
        required: true
    },


    w_gender: {
        type: String,
        required: true
    },

    w_category: {
        type: Array,
        required: true
    },

    locality: {
        type: String,
        required:true
    },

    street_No: {
        type: String,
        required:true
    },

    house_No: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

},{
    timestamps: true
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;
