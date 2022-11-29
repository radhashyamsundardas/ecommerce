const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema ({
    _id: {
        type: Number,
        required: true
    },
    payment_status: {
        type: Boolean,
        require: true
    },
    customer_id: {
        type: Number,
        required: true
    },
    payment_id: {
        type: Number,
        required: true
    },
    product_id: {
        type: Number,
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    delivery_date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    //question, how do I add the quantity: Int tax: Float Total: Float carrier: String tracking_number: String carts: [Carts]
})

const Order = model('Order', orderSchema);

module.exports = Order;