const {End_user, Product, Order, Cart} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('..utils/auth');

const resolvers = {
    Query: { //GET routes
        end_users: async () => {
            return End_user.find().populate('orders'); //when querying users we must also populate or pull all of the user's orders
        },
        end_user: async (parent, {username}) => { //when querying one user we must also populate or pull all of the user's orders
            return End_user.findOne({username}).populate('orders');
        },
        orders: async (parent, {username}) => { //find orders by username and sort by the creation date
            const params = username ? {username} : {};
            return Order.find(params).sort({createdAt: -1});
        },
        order: async (parent, {orderId}) => { //find ONE order by order ID
            return Order.findOne({_id: orderId});
        },
        carts: async (parent, {username}) => { //find open carts by username and sort by creation date
            const params = username ? {username} : {};
            return Cart.find(params).sort({createdAt: -1});
        },
        cart: async (parent, {cartId}) => { //find all open carts by cart ID and list by ID
            return Cart.findOne({_id: cartId});
        },
        products: async () => { //find all products
            return Products.find();
        },
        products: async (parent, {productId}) => { //find products by product ID and sort by category 
            const params = productId ? {productId} : {};
            return Products.find(params).sort({category: category});
        },
        products: async (parent, {username}) => { //find all products created by a admin user and sort results by product name
            const params = username ? {username} : {};
            return Product.find(params).sort({product_name});
        }
    },

    Mutation: { //POST, UPDATE, DELETE Routes
        addUser: async (parent, {
            username,
            address,
            city,
            state,                      
            zipcode,
            country,
            telephone,
            date_of_birth,
            email,
            password}) => {
                const end_user = await End_user.create({    //creating a user
                    username,
                    address,
                    city,
                    state,
                    zipcode,
                    country,
                    telephone,
                    date_of_birth,
                    email,
                    password
                });
                const token = signToken(end_user);          //assigning a token to new user
                return {token, end_user};
            },
            //Find and update user by email
            updateUser: async (parent, { 
                email, 
                username,
                address,
                city,
                state,
                zipcode,
                country,
                telephone,
                date_of_birth,
                password
            }) => {
                return await End_user.findOneAndUpdate(
                    {email: email}, 
                    {username},
                    {address},
                    {city},
                    {state},
                    {zipcode},
                    {country},
                    {telephone},
                    {date_of_birth},
                    {password},
                    {new: true} //return new updated object
                )
            },

            login: async (parent, {email, password}) => {  //user logins with email and password
                const end_user = await End_user.findOne({email});
                if (!end_user) {    //if user is not found throw an error 
                    throw new AuthenticationError('Sorry we could not find a user with this email');
                }

                const correctPassword = await end_user.isCorrectPassword(password); //else confirm password is correct
                if(!correctPassword) {      //if password is not correct 
                    throw new AuthenticationError('Incorrect Password');    //throw error message
                }

                const token = signToken(user);
                return {token, end_user};
            },

            addProduct: async (parent, {
                product_name,
                product_description,
                stock_qty,
                price,
                category,
                image_link}) => {
                    return await Product.create({
                        product_name,
                        product_description,
                        stock_qty,
                        price,
                        category,
                        image_link
                    });
            },

            updateProduct: async (parent, {
                id,
                product_name,
                product_description,
                stock_qty,
                price,
                category,
                image_link
            }) => {
                return await Product.findOneAndUpdate(
                    {_id: id},
                    {product_name},
                    {product_description},
                    {stock_qty},
                    {price},
                    {category},
                    {image_link},
                    {new: true});
            },

            removeProduct: async (parent, {productId}, context) => {
                if (context.orders) {
                    const product = await Product.findOneAndDelete({
                        _id: productId,
                        customer_id: context.orders.id,
                    });
                    await Order.findOneAndUpdate(
                        { _id: context.order.id},
                        {$pull: {products: product._id}} 
                    );
                    return product;
                }
                throw new AuthenticationError('You must be logged in to remove a product');
            },

            addOrder: async (parent, {
                payment_status,
                payment_id,
                product_id, //this needs to be an array of products if more than 1
                order_date,
                delivery_date,
                quantity,
                tax,
                total,
                carrier,
                tracking_number
            }, context) => {
                if (context.user) {
                    const order = await Order.create({
                        payment_status,
                        payment_id,
                        product_id, //this needs to be an array of products
                        order_date,
                        delivery_date,
                        quantity,
                        tax,
                        total,
                        carrier,
                        tracking_number,
                        customer_id: context.user.id
                    });
                    await End_user.findOneAndUpdate(
                        {_id: context.end_user.id},
                        {$addToSet: { orders: order.id}}
                    );
                    return order;
                }
                throw new AuthenticationError('You must be logged in to remove a product');
            },

            updateOrder: async (parent, {
                _id,
                payment_status,
                payment_id,
                product_id, //this needs to be an array of products if more than 1
                order_date,
                delivery_date,
                quantity,
                tax,
                total,
                carrier,
                tracking_number
            }) => {
                return await Order.findOneAndUpdate(
                    {_id: id},
                    {payment_status},
                    {payment_id},
                    {product_id}, //this needs to be an array of products if more than 1
                    {order_date},
                    {delivery_date},
                    {quantity},
                    {tax},
                    {total},
                    {carrier},
                    {tracking_number},
                    {new: true});
            },

            addCart: async (parent, {
                product_name,
                product_description,
                category,
                customer_id,
                product_id,
                cart_date,
                quantity
            }, context) => {
                    if(context.end_user) {
                        const cart = await Cart.create({
                            product_name,
                            product_description,
                            category,
                            product_id,
                            cart_date,
                            quantity,
                            customer_id: context.end_user.id
                        });
                        await End_user.findOneAndUpdate(
                            {_id: context.end_user._id},
                            {$addToSet: {carts: cart._id}}
                        );
                        return cart;
                    }
                    throw new AuthenticationError('You must be logged in to add a cart');
            },

            removeCart: async (parent, {customer_id, cartId}, context) => {
                if(context.end_user) {
                    return End_user.findOneAndUpdate(
                        {_id: customer_id},
                        {$pull: {
                            cart: {
                                _id: cartId,
                                customer_id: context.end_user.id,
                            },
                        },
                    },
                    {new: true});
                } throw new AuthenticationError('You must be logged in to remove a cart');
            },    
    },
};

module.exports = resolvers;