const {User, Product, Order, Cart} = require('../server/models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../server/utils/auth');

const resolvers = {
    Query: { //GET routes
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
        addUser: async (parent, {
            username,
            address,
            city,
            state,                      
            zipcode,
            country,
            telephone,
            email,
            password}) => {
                const user = await User.create({    //creating a user
                    username,
                    address,
                    city,
                    state,
                    zipcode,
                    country,
                    telephone,
                    email,
                    password
                });
                const token = signToken(user);          //assigning a token to new user
                return {token, user};
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
                password
            }) => {
                return await User.findOneAndUpdate(
                    {email: email}, 
                    {username},
                    {address},
                    {city},
                    {state},
                    {zipcode},
                    {country},
                    {telephone},
                    {password},
                    {new: true} //return new updated object
                )
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
                return {token, user};
            },

            addProduct: async (parent, {
                productName,
                productDescription,
                stockQty,
                price,
                category,
                imageLink}) => {
                    return await Product.create({
                        productName,
                        productDescription,
                        stockQty,
                        price,
                        category,
                        imageLink
                    });
            },

            updateProduct: async (parent, {
                id,
                productName,
                productDescription,
                stockQty,
                price,
                category,
                imageLink
            }) => {
                return await Product.findOneAndUpdate(
                    {id: id},
                    {productName},
                    {productDescription},
                    {stockQty},
                    {price},
                    {category},
                    {imageLink},
                    {new: true});
            },

            removeProduct: async (parent, {productId}, context) => {
                if (context.order) {
                    const product = await Product.findOneAndDelete({
                        id: productId,
                        customerId: context.order.id,
                    });
                    await Order.findOneAndUpdate(
                        { id: context.order.id},
                        {$pull: {product: product.id}} 
                    );
                    return product;
                }
                throw new AuthenticationError('You must be logged in to remove a product');
            },

            addOrder: async (parent, {
                paymentStatus,
                paymentId,
                productId, //this needs to be an array of products if more than 1
                quantity,
                tax,
                total,
                carrier,
                trackingNumber
            }, context) => {
                if (context.user) {
                    const order = await Order.create({
                        paymentStatus,
                        paymentId,
                        productId, //this needs to be an array of products
                        quantity,
                        tax,
                        total,
                        carrier,
                        trackingNumber,
                        customerId: context.user.id
                    });
                    await User.findOneAndUpdate(
                        {id: context.user.id},
                        {$addToSet: { order: order.id}}
                    );
                    return order;
                }
                throw new AuthenticationError('You must be logged in to remove a product');
            },

            updateOrder: async (parent, {
                id,
                paymentStatus,
                paymentId,
                productId, //this needs to be an array of products if more than 1
                quantity,
                tax,
                total,
                carrier,
                trackingNumber
            }) => {
                return await Order.findOneAndUpdate(
                    {id: id},
                    {paymentStatus},
                    {paymentId},
                    {productId}, //this needs to be an array of products if more than 1
                    {quantity},
                    {tax},
                    {total},
                    {carrier},
                    {trackingNumber},
                    {new: true});
            },

            addCart: async (parent, {
                productName,
                productDescription,
                category,
                customerId,
                productId,
                quantity
            }, context) => {
                    if(context.user) {
                        const cart = await Cart.create({
                            productName,
                            productDescription,
                            category,
                            productId,
                            quantity,
                            customerId: context.user.id
                        });
                        await User.findOneAndUpdate(
                            {id: context.user.id},
                            {$addToSet: {cart: cart.id}}
                        );
                        return cart;
                    }
                    throw new AuthenticationError('You must be logged in to add a cart');
            },

            removeCart: async (parent, {customerId, cartId}, context) => {
                if(context.user) {
                    return User.findOneAndUpdate(
                        {id: customerId},
                        {$pull: {
                            cart: {
                                id: cartId,
                                customerId: context.user.id,
                            },
                        },
                    },
                    {new: true});
                } throw new AuthenticationError('You must be logged in to remove a cart');
            },    
    },
};

module.exports = resolvers;