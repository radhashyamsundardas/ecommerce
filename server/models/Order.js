const { Decimal128 } = require('mongodb');
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
    quantity: {
        type: Number,
        require: true
    },
    tax: {
        type: Decimal128,
        require: true
    },
    total: {
        type: Decimal128,
        require: true
    },
    carrier: {
        type: String,
        require: true
    },
    trackingNumber: {
        type: String,
        require: true
    },
    cart: [
        {
          type: Schema.Types.ObjectId,
          ref: ['Cart']
        }
      ]
});

const Order = model('Order', orderSchema);

module.exports = Order;