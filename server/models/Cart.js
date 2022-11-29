const { Schema, model } = require('mongoose');
const { Cart } = require('.');
const dateFormat = require('../utils/dateFormat');


const cartSchema = new Schema ({
    _id: {
        type: Number,
        required: true
    },
    customer_id: {
        type: Number,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    product_id: {
        type: Number,
        require: true
    },
    cart_date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    quantity: {
        type: Number,
        require: true
    },
    username: [
        {
          type: Schema.Types.ObjectId,
          ref: ['End_user']
        }
    ],
})

const Cart = model('Cart', cartSchema);
module.exports = Cart;