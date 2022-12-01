import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    //[noun, action]
  const [formState, setFormState] = useState({ email: '', password: '' }); //state
  const [addUser] = useMutation(ADD_USER); //hook

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        address: formState.address,
        telephoneNumber: formState.telephoneNumber,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
    <div className="p-4 my-2 d-flex flex-column ">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Full Name:</label>
          <input
            placeholder="Full Name"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
        <input
            placeholder="Address"
            name="address"
            type="address"
            id="address"
            onChange={handleChange}
          />    
        </div>
        <div className="flex-row space-between my-2">
        <input
            placeholder="Telephone Number"
            name="telephoneNumber"
            type="telephoneNumber"
            id="telephoneNumber"
            onChange={handleChange}
          />    
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;