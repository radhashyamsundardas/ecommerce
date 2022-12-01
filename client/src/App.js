
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Treadmills from "./components/Treadmills";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bikes from "./components/Bikes";
import Shoes from "./components/Shoes";
import Login from "./components/Login";
import Cart from "./components/cart";
import Signup from "./components/Signup"
import { useState } from "react";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({uri: '/graphql',});



const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const App = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        {" "}
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Treadmills" element={<Treadmills />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        <Route path="/Bikes" element={<Bikes />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
      <div>
        <Footer />{" "}
      </div>
    </Router>
    </ApolloProvider>
  );
};

export default App;
