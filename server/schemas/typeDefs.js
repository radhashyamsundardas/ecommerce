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
        orders: [Orders]
        carts: [Carts]
        products: [Products]
        end_user: [End_users]
    }
`;

module.exports = typeDefs;