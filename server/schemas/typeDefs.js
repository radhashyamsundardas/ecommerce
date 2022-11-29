const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Order {
        id: ID
        payment_status: Boolean
        customerId: ID
        paymentId: String
        productId: ID
        orderDate: scalar Date
        deliveryDate: scalar Date
        quantity: Int
        tax: Float
        Total: Float
        carrier: String
        trackingNumber: String
        carts: [Carts]
    }

    type Cart {
        id: ID
        productName: String
        productDescription: String
        category: String
        customerId: ID
        productId: ID
        cartDate: scalar Date
        quantity: Int
        user: user
    }

    type Product {
        id: ID
        ProductName: String
        ProductDescription: String
        StockQty: Int
        Price: Float
        Category: String
        ImageLink: String
        product: user
    }

    type End_user {
        id: ID
        Name: String
        Address: String
        City: String
        State: String
        zip code: String
        country: String
        telephone: String
        dateOfBirth: scalar Date
        email: String
        password: String
        PaymentMethod: String
        cardExpiration: scalar Date
        carts: [Carts]
        orders: [Orders] 
    }

    type Query {
        users: [End_users]
        user (username: String!): User
        orders(username: String!): [Orders]
        order (orderId: ID!): Order
        carts(username: String!): [Carts]
        cart (cartId: ID!): Cart
        products: [Products]
        products(productId: ID!): [Products]
        products(username: String!): [Products]
    }

    type Mutation {
        addUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, dateOfBirth: scalar Date!, email: String!, password: String!): Auth
        updateUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, dateOfBirth: scalar Date!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        addProduct(productName: String!, productDescription: String!, stockQty: Int!, price: Float!, category: String!, image_link: String!): Product
        updateProduct(id: ID!, productName: String!, productDescription: String!, stockQty: Int!, price: Float!, category: String!, imageLink: String!) : Product
        removeProduct(id: ID!): Product
        addOrder(paymentStatus: Boolean!, paymentId: ID!, productId: ID! , orderDate: scalar Date!, deliveryDate: scalar Date!, quantity: Int!, tax: Float!, total: Float!, carrier: String!, trackingNumber: String!): Order
        updateOrder(id: ID!, payment_status: Boolean!, payment_id: ID!, product_id: ID! , order_date: scalar Date!, delivery_date: scalar Date!, quantity: Int!, tax: Float!, total: Float!, carrier: String!, trackingNumber: String!): Order
        addCart(product_name: String!, productDescription: String!, category: String!, customerId: ID!, productId: ID!, cartDate: scalar Date!, quantity: Int!): Cart
        updateCart(id: ID!, productName: String!, productDescription: String!, category: String!, customerId: ID!, productId: ID!, cartDate: scalar Date!, quantity: Int!): Cart
        removecart(id: ID!): Cart       
    }
`;

module.exports = typeDefs;


