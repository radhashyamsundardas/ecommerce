const {User, Product, Category, Order} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: { //GET routes
        categories: async () => Category.find(),
        users: async () => {
            return User.find().populate('order'); //when querying users we must also populate or pull all of the user's order
        },
        user: async (parent, {username}) => { //when querying one user we must also populate or pull all of the user's order
            return User.findOne({username}).populate('order');
        },
        orders: async (parent, {username}) => { //find order by username and sort by the creation date
            const params = username ? {username} : {};
            return Order.find(params).sort({createdAt: -1});
        },
        order: async (parent, {orderId}) => { //find ONE order by order ID
            return Order.findOne({id: orderId});
        },
        carts: async (parent, {username}) => { //find open cart by username and sort by creation date
            const params = username ? {username} : {};
            return Cart.find(params).sort({createdAt: -1});
        },
        cart: async (parent, {cartId}) => { //find all open cart by cart ID and list by ID
            return Cart.findOne({id: cartId});
        },
        products: async () => { //find all products
            return Product.find();
        },
        // product: async (parent, {productId}) => { //find products by product ID and sort by category 
        //     const params = productId ? {productId} : {};
        //     return Product.find(params).sort({category: category});
        // },
        product: async (parent, {username}) => { //find all products created by a admin user and sort results by product name
            const params = username ? {username} : {};
            return Product.find(params).sort({productName});
        }
    },

    Mutation: { //POST, UPDATE, DELETE Routes
        addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);          //assigning a token to new user
                return {token, user};
        },
        
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return User.findByIdAndUpdate(context.user.id, args,
                    {new: true,});
        }
        throw new AuthenticationError('You are not logged in');
        },

        login: async (parent, {email, password}) => {  //user logins with email and password
            const user = await User.findOne({email});
            if (!user) {    //if user is not found throw an error 
                throw new AuthenticationError('Sorry we could not find a user with this email');
            }

            const correctPassword = await user.isCorrectPassword(password); //else confirm password is correct
            if(!correctPassword) {      //if password is not correct 
                throw new AuthenticationError('Incorrect Password');    //throw error message
            }

            const token = signToken(user);
            console.log(user);
            return {token, user,};
        },

        addProduct: async (parent, args) => {
            const product = await Product.create(args);
                return product;
        },

        updateProduct: async (parent, { id, stockQty }) => {
            const decrement = Math.abs(stockQty) * -1;
      
            return Product.findByIdAndUpdate(
              id,
              { $inc: { stockQty: decrement } },
              { new: true }
            );
          },

        removeProduct: async (parent, {productId}, context) => {
            if (context.order) {
                const product = await Product.findByIdAndDelete({
                    id: productId,
                    customerId: context.order.id,
                });
                await Order.findByIdAndUpdate(
                    { id: context.order.id},
                    {$pull: {product: product.id}} 
                );
                return product;
            }
            throw new AuthenticationError('You must be logged in to remove a product');
        },

        addOrder: async (parent, {products}, context) => {
            if (context.user) {
                const order = new Order.create({products});
                await User.findByIdAndUpdate(context.user.id, 
                    {$push: {orders: order}}
                );
                return order;
            }
            throw new AuthenticationError('You must be logged in to remove a product');
        },

        updateOrder: async (parent, {products}, context) => {
            if (context.user) {
                return Order.findByIdAndUpdate(context.user.id, args, {new: true,});
            }
            throw new AuthenticationError('You must be logged in to remove a product');
        },   
    },
};

module.exports = resolvers;