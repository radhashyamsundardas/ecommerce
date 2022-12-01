import { gql } from '@apollo/client';
export const ADD_USER = gql `
mutation addUser($username: String!, $address: String!, $city: String!, $state: String!, $zipcode: String!, $country: String!, $telephone: String!, $email: String!, $password: String!) {
    addUser(username: $username, address: $address, city: $city, state: $state, zipcode: $zipcode, country: $country, telephone: $telephone, email: $email, password: $password) {
        id
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
export const UPDATE_USER = gql`
mutation updateUser($username: String!, $address: String!, $city: String!, $state: String!, $zipcode: String!, $country: String!, $telephone: String!, $email: String!, $password: String!) {
    updateUser(username: $username, address: $address, city: $city, state: $state, zipcode: $zipcode, country: $country, telephone: $telephone, email: $email, password: $password){
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
export const LOGIN = gql `
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        email
        password
    }
}`;
export const ADD_PRODUCT = gql `
mutation AddProduct($productName: String!, $productDescription: String!, $stockQty: Int!, $price: Float!, $category: String!, $imageLink: String!) {
    addProduct(productName: $productName, productDescription: $productDescription, stockQty: $stockQty, price: $price, category: $category, image_link: $imageLink){
        productName
        productDescription
        stockQty
        price
        category
        image_link
    }
}`;
export const UPDATE_PRODUCT = gql`
mutation UpdateProduct($updateProductId: ID!, $productName: String!, $productDescription: String!, $stockQty: Int!, $price: Float!, $category: String!, $imageLink: String!) {
    updateProduct(id: $updateProductId, productName: $productName, productDescription: $productDescription, stockQty: $stockQty, price: $price, category: $category, imageLink: $imageLink) {
        id
        productName
        productDescription
        stockQty
        price
        category
        image_link
    }
}`;
export const REMOVE_PRODUCT = gql`
mutation RemoveProduct($removeProductId: ID!) {
    removeProduct(id: $removeProductId) {
        removeProduct
    }
}`;
export const ADD_ORDER = gql`
mutation AddOrder($paymentStatus: Boolean!, $paymentId: ID!, $productId: ID!, $quantity: Int!, $tax: Float!, $total: Float!, $carrier: String!, $trackingNumber: String!) {
    addOrder(paymentStatus: $paymentStatus, paymentId: $paymentId, productId: $productId, quantity: $quantity, tax: $tax, total: $total, carrier: $carrier, trackingNumber: $trackingNumber) {
              id
              paymentId
              quantity
              tax
              total
              carrier
              trackingNumber
    }
  }`;
export const UPDATE_ORDER = gql `
mutation UpdateOrder($updateOrderId: ID!, $paymentStatus: Boolean!, $paymentId: ID!, $productId: ID!, $quantity: Int!, $tax: Float!, $total: Float!, $carrier: String!, $trackingNumber: String!) {
    updateOrder(id: $updateOrderId, paymentStatus: $paymentStatus, paymentId: $paymentId, productId: $productId, quantity: $quantity, tax: $tax, total: $total, carrier: $carrier, trackingNumber: $trackingNumber) {
      updateOrderId
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
export const ADD_CART = gql `
mutation AddCart($productName: String!, $productDescription: String!, $category: String!, $customerId: ID!, $productId: ID!, $quantity: Int!) {
    addCart(product_name: $productName, productDescription: $productDescription, category: $category, customerId: $customerId, productId: $productId, quantity: $quantity) {
          id
          productName
          productDescription
          category
          customerId
          productId
          quantity
    }
  }`;
export const UPDATE_CART = gql `
mutation updateCart($updateCartId: ID!, $productName: String!, $productDescription: String!, $category: String!, $customerId: ID!, $productId: ID!, $quantity: Int!) {
    updateCart(id: $updateCartId, productName: $productName, productDescription: $productDescription, category: $category, customerId: $customerId, productId: $productId, quantity: $quantity) {
              id
              updateCartId
              productName
              productDescription
              category
              customerId
              productId
              quantity
    }
  }`;
  export const REMOVE_CART = gql `
  mutation RemoveCart($removeCartId: ID!) {
    removeCart(id: $removeCartId) {
      id
      removeCartId
    }
  }`;