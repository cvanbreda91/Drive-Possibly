import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_DOCTOR } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ drFirstName: " ", drLastName: " ", drEmail: '', drPassword: '' });
  const [addDoctor] = useMutation(ADD_DOCTOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDoctor({
      variables: {
        drFirstName: formState.drFirstName,
        drLastName: formState.drLastName,
        drEmail: formState.drEmail,
        drPassword: formState.drPassword
      },
    });
    const token = mutationResponse.data.addDoctor.token;
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
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="drFirstName">First Name:</label>
          <input
            placeholder="First"
            name="drFirstName"
            type="drFirstName"
            id="drFirstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drLastName">Last Name:</label>
          <input
            placeholder="Last"
            name="drLastName"
            type="drLastName"
            id="drLastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drEmail">Email:</label>
          <input
            placeholder="youremail@email.com"
            name="drEmail"
            type="drEmail"
            id="drEmail"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drPassword">Password:</label>
          <input
            placeholder="******"
            name="drPassword"
            type="drPassword"
            id="drPassword"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;