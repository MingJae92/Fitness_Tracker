import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import RegisterForm from '../img/bg.jpg';

function Register() {
  // Styles for the container, image, and header
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const headerStyle = {
    padding: '20px',
  };

  // New validation function for confirming passwords
  const validatePassword = (value) => {
    const minLength = 8; // Minimum length for the password
    const hasUpperCase = /[A-Z]/.test(value); // Check if the password has at least one uppercase letter
    const hasLowerCase = /[a-z]/.test(value); // Check if the password has at least one lowercase letter
    const hasNumber = /\d/.test(value); // Check if the password has at least one digit
    const hasSymbol = /[!@#$%^&*()_+,.?":{}|<>]/.test(value); // Check if the password has at least one special symbol

    if (!value) {
      return 'Password is required';
    } else if (value.length < minLength) {
      return `Password should have at least ${minLength} characters`;
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
      return 'Password should include at least one uppercase letter, one lowercase letter, one digit, and one special symbol';
    }

    return true; // Validation passed
  };

  // New validation function for confirming passwords
  const validatePasswordConfirm = (value, { password }) => {
    if (!value) {
      return 'Password confirmation is required';
    } else if (value !== password) {
      return 'Passwords do not match';
    }

    return true; // Validation passed
  };

  // State variables to store form input values
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (data) => {
    console.log(JSON.stringify(data));
    alert('You are now registered!');
  };

  return (
    <div style={containerStyle}>
      {/* Display the registration form header */}
      <h1 style={headerStyle}>Register</h1>
      {/* Display the background image */}
      <img src={RegisterForm} alt="Landing Page" style={imageStyle} />
      {/* Define the registration form using React Bootstrap components */}
      <Form onSubmit={handleSubmit(handleRegister)}>
        {/* Input field for username */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 5, message: 'The username should have at least 5 characters' },
              pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'Username must contain only letters, numbers, and _' },
            })}
          />
          <div style={{ color: 'red' }}>{errors.username?.message}</div>
        </Form.Group>

        {/* Input field for email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register('email', {
              required: 'Email required',
              maxLength: { value: 50, message: 'The email should have at most 50 characters' },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email address must be a valid address',
              },
            })}
          />
          <div style={{ color: 'red' }}>{errors.email?.message}</div>
          {/* Display a helper text for the email field */}
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        {/* Input field for password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            {...register('password', {
              validate: validatePassword,
            })}
          />
          <div style={{ color: 'red' }}>{errors.password?.message}</div>
        </Form.Group>

        {/* Input field to confirm password */}
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm password:</Form.Label>
          <Form.Control
            type="password"
            {...register('confirmPassword', {
              required: 'Password confirmation is required',
              validate: {
                matchesPassword: validatePasswordConfirm,
              },
            })}
          />
          <div style={{ color: 'red' }}>{errors.confirmPassword?.message}</div>
        </Form.Group>

        {/* Submit button to register */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
