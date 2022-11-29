const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        require: true
    },
    customerId: {
        type: Number,
        required: true
    },
    paymentId: {
        type: Number,
        required: true
    },
    productId: {
        type: Number,
        required: true
    },
    //question, how do I add the quantity: Int tax: Float Total: Float carrier: String tracking_number: String carts: [Carts]
})

const Order = model('Order', orderSchema);

module.exports = Order;