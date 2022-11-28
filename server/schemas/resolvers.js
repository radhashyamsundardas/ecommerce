const {End_user, Product, Order, Cart} = require('../models');

const resolvers = {
    Query: {
        cart: async () => {
            return await Cart.find({}).populate('orders').populate({
                path: 'orders',
                populate: 'end_user'
            });
        },
        orders: async () => {
            return await Orders.find({}).populate('end_user');
        },
        end_user: async () => {
            return await End_user({});
        }
    }
};

module.exports = resolvers;