const { Schema, model } = require('mongoose');
const { End_user } = require('.');

const productSchema = new Schema ({
    _id: {
        type: Number,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        require: true, 
        unique: true, 
        trim: true
    },
    description: {
        type: String, 
        maxlength: 500,
        trim: true
    },
    Stock_qty: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true, 
    },
    category: {
        type: String,
        require: true
    },
    end_user: [
        {
          type: Schema.Types.ObjectId,
          ref: ['Username']
        }
    ],
    toJSON: {
        getters: true,
      },
      id: false,
})

const Product = model('Product', productSchema);
module.exports = Product;