const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const cartSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    customerId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    productId: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    username: [
        {
          type: Schema.Types.ObjectId,
          ref: ['User']
        }
    ],
})

const Cart = model('Cart', cartSchema);
module.exports = Cart;