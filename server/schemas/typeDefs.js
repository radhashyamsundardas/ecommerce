const {gpl} = requestAnimationFrame('apollo-server-express');

const typeDefs = gpl `
    type Order {
        _id: ID
        payment_status: Boolean
        customer_id: ID
        payment_id: String
        product_id: ID
        order_date: scalar Date
        delivery_date: scalar Date
        quantity: Int
        tax: Float
        Total: Float
        carrier: String
        tracking_number: String
        carts: [Carts]
    }

    type Cart {
        _id: ID
        product_name: String
        product_description: String
        category: String
        customer_id: ID
        product_id: ID
        cart_date: scalar Date
        quantity: Int
        end_user: End_user
    }

    type Product {
        _id: ID
        Product_name: String
        Product_description: String
        Stock_qty: Int
        Price: Float
        Category: String
        Image_link: String
        product: End_user
    }

    type End_user {
        _id: ID
        Name: String
        Address: String
        City: String
        State: String
        zip code: String
        country: String
        telephone: String
        date_of_birth: scalar Date
        email: String
        password: String
        Payment_method: String
        card_expiration: scalar Date
        carts: [Carts]
        orders: [Orders] 
    }

    type Query {
        end_users: [End_users]
        end_user:username: String!): End_user
        orders(username: String!): [Orders]
        order:(orderId: ID!): Order
        carts(username: String!): [Carts]
        cart:(cartId: ID!): Cart
        products: [Products]
        products(productId: ID!): [Products]
        products(username: String!): [Products]
    }

    type Mutation {
        addUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, date_of_birth: scalar Date!, email: String!, password: String!): Auth
        updateUser(username: String!, address: String!, city: String!, state: String!, zipcode: String!, country: String!, telephone: String!, date_of_birth: scalar Date!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        addProduct(product_name: String!, product_description: String!, stock_qty: Int!, price: Float!, category: String!, image_link: String!): Product
        updateProduct(_id: ID!, product_name: String!, product_description: String!, stock_qty: Int!, price: Float!, category: String!, image_link: String!) : Product
        removeProduct(_id: ID!): Product
        addOrder(payment_status: Boolean!, payment_id: ID!, product_id: ID! , order_date: scalar Date!, delivery_date: scalar Date!, quantity: Int!, tax: Float!, total: Float!, carrier: String!, tracking_number: String!): Order
        updateOrder(_id: ID!, payment_status: Boolean!, payment_id: ID!, product_id: ID! , order_date: scalar Date!, delivery_date: scalar Date!, quantity: Int!, tax: Float!, total: Float!, carrier: String!, tracking_number: String!): Order)
        addCart(product_name: String!, product_description: String!, category: String!, customer_id: ID!, product_id: ID!, cart_date: scalar Date!, quantity: Int!): Cart
        updateCart(_id: ID!, product_name: String!, product_description: String!, category: String!, customer_id: ID!, product_id: ID!, cart_date: scalar Date!, quantity: Int!): Cart
        removecart(_id: ID!): Cart       
    }
`;

module.exports = typeDefs;


