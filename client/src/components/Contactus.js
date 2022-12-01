
import React from "react";
import { MDBInput, MDBCheckbox, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";



function Contactus() {
  return (
    <div className="contact-container">
      <form
        id="form"
        className="text-center"
        style={{ width: "100%", maxWidth: "300px" }}
      >
        <h2>Contact us</h2>

        <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

        <MDBInput
          type="email"
          label="Email address"
          v-model="email"
          wrapperClass="mb-4"
        />

        <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />

        <MDBTextArea wrapperClass="mb-4" label="Message" />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center"
          label=" Send me a copy"
        />

        <button type="button" className="btn btn-info btn-sm mb-4 w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactus;
