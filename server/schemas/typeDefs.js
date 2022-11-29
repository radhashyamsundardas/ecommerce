const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Order {
        id: ID
        paymentStatus: Boolean
        customerId: ID
        paymentId: String
        productId: ID
        quantity: Int
        tax: Float
        total: Float
        carrier: String
        trackingNumber: String
        cart: [Cart]
    }

    type Cart {
        id: ID
        customerId: ID
        productName: String
        productDescription: String
        category: String
        productId: ID
        quantity: Int
        username: user
    }

    type Product {
        id: ID
        productName: String
        productDescription: String
        stockQty: Int
        price: Float
        category: String
        imageLink: String
        product: User
    }

    type User {
        id: ID
        name: String
        address: String
        city: String
        state: String
        zipCode: String
        country: String
        telephone: String
        email: String
        password: String
        paymentMethod: String
        cart: [Cart]
        order: [Order] 
    }

    type Query {
        user: [User]
        user(username: String!): User
        order(username: String!): [Order]
        order(orderId: ID!): Order
        cart(username: String!): [Cart]
        cart(cartId: ID!): Cart
        product: [Product]
        product(productId: ID!): Product
        product(username: String!): [Product]
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


