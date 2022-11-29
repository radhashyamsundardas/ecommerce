const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Order {
        id: ID
        payment_status: Boolean
        customerId: ID
        paymentId: String
        productId: ID
        quantity: Int
        tax: Float
        total: Float
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
        quantity: Int
        user: user
    }

    type Product {
        id: ID
        productName: String
        productDescription: String
        stockQty: Int
        price: Float
        category: String
        imageLink: String
        product: user
    }

    type End_user {
        id: ID
        name: String
        address: String
        city: String
        state: String
        zip code: String
        country: String
        telephone: String
        email: String
        password: String
        paymentMethod: String
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
        addUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, email: String!, password: String!): Auth
        updateUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        addProduct(productName: String!, productDescription: String!, stockQty: Int!, price: Float!, category: String!, image_link: String!): Product
        updateProduct(id: ID!, productName: String!, productDescription: String!, stockQty: Int!, price: Float!, category: String!, imageLink: String!) : Product
        removeProduct(id: ID!): Product
        addOrder(paymentStatus: Boolean!, paymentId: ID!, productId: ID! , quantity: Int!, tax: Float!, total: Float!, carrier: String!, trackingNumber: String!): Order
        updateOrder(id: ID!, payment_status: Boolean!, payment_id: ID!, product_id: ID! , quantity: Int!, tax: Float!, total: Float!, carrier: String!, trackingNumber: String!): Order
        addCart(product_name: String!, productDescription: String!, category: String!, customerId: ID!, productId: ID!, quantity: Int!): Cart
        updateCart(id: ID!, productName: String!, productDescription: String!, category: String!, customerId: ID!, productId: ID!, quantity: Int!): Cart
        removecart(id: ID!): Cart       
    }
`;

module.exports = typeDefs;


