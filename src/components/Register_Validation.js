import React from 'react'
import { useForm } from "react-hook-form";
import RegisterForm from '../img/bg.jpg';

function Register_Validation() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleRegister = (data) => {
    console.log(data)
  }

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
            placeholder="Enter username"
            name={...register("username")}
          />
        </Form.Group>

        {/* Input field for email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            name="email"
          />
          {/* Display a helper text for the email field */}
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        {/* Input field for password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            name="password"
          />
        </Form.Group>

        {/* Input field to confirm password */}
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm password:</Form.Label>
          <Form.Control
            type="password"
           {...register("confirmpassword")}
            name="confirmPassword"
           
          />
        </Form.Group>

        {/* Submit button to register */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register_Validation