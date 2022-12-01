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
      <Link to="/login">← Back to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row my-4">
          
          <input
          style={{width:'100%',borderRadius: 5,border:'solid lightGray .2px'}}
            placeholder=""
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
          <label htmlFor="username">Name:</label>
        </div>
        <div className="flex-row my-4 ">
        <input
        style={{width:'100%',borderRadius: 5,border:'solid lightGray .2px'}}
            placeholder=""
            name="address"
            type="address"
            id="address"
            onChange={handleChange}
          /> 
          <label htmlFor="username">Address:</label>   
        </div>
        <div className="flex-row my-4">
        <input
        style={{width:'100%', borderRadius: 5,border:'solid lightGray .2px'}}
            placeholder=""
            name="telephoneNumber"
            type="telephoneNumber"
            id="telephoneNumber"
            onChange={handleChange}
          />  
          <label htmlFor="pwd">Number:</label>  
        </div>
        <div className="flex-row my-4">
          
          <input
          style={{width:'100%',borderRadius: 5,border:'solid lightGray .2px'}}
            placeholder=""
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
        </div>
        <div className="flex-row my-4">
          
          <input
          style={{width:'100%',borderRadius: 5, border:'solid lightGray .2px'}}
            placeholder=""
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
        </div>
        <div className="flex-row flex-end">
          <button className="btn btn-info mb-4 w-100" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signup;