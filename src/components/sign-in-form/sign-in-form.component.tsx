import React from 'react';
import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import '../sign-in-form/sign-in-form.styles.scss';
import Button from '../button/button.component';

function SignInForm() {
  const defaultFormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
        switch(error.code) {
          case 'auth/wrong-password': 
            alert('wrong password asshole');
            break;
          case 'auth/user-not-found':
            alert('no such user, asshole');
            break;
          default:
            console.log(error);
        }
        }
      }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already a Crow?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className='buttons-container'>
          <Button buttonType="" type="submit">
            Sign In
          </Button>
          <Button type='button' buttonType="google" onSubmit={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
