import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function App() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className="login-container">
      <MDBContainer className="p-4 my-2 d-flex flex-column ">

            <div className="text-center mb-3">
              <h3>Login</h3>

             
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn color="info" className="mb-4 w-100">
              Sign in
           </MDBBtn>
            <p className="text-center">
              Not a member? <Link to="/Signup"><p>Register</p></Link>
            </p>
        
      </MDBContainer>
    </div>
  );
}

export default App;
