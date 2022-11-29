const { Schema, model } = require('mongoose');

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
        required: true
    },
    delivery_date: {
        type: Date,
        require: true
    },
    //question, how do I add the quantity: Int tax: Float Total: Float carrier: String tracking_number: String carts: [Carts]
})