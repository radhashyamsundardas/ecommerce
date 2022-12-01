import { gql } from '@apollo/client';
export const QUERY_USERS = gql `
query addUser {
     users {
        _id
        username
        address
        city
        state
        zipcode
        country
        telephone
        email
        password
     }
    }`;
export const QUERY_USER = gql `
query updateUser {
    user {
        _id
        email
        username
        address
        city
        state
        zipcode
        country
        telephone
        password
    }
}`;
export const QUERY_ORDERS = gql `
query orders {
    orders {
        paymentStatus
        paymentId
        productId
        quantity
        tax
        total
        carrier
        trackingNumber
    }
}`;
export const QUERY_ORDER = gql `
query order {
    order {
        paymentStatus
        paymentId
        productId
        quantity
        tax
        total
        carrier
        trackingNumber
    }
}`;
export const QUERY_CARTS = gql `
query carts {
    carts {
        productName
        productDescription
        category
        customerId
        productId
        quantity
    }
}`;
export const QUERY_cart = gql `
query cart {
    cart {
        productName
        productDescription
        category
        productId
        quantity
        customerId
    }
}`;