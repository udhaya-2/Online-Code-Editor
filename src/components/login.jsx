import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from ".../";
import { auth } from "../fire_base/fireBase"; // make sure firebase.js is configured

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center bg-white p-4">
      <Card style={{ width: "18rem" }} className="p-2">
        <Form className="m-2" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

          <span>New account create </span>
          <NavLink to="/signup">
            <span className="text-primary" style={{ fontSize: "15px", cursor: "pointer" }}>
              New
            </span>
          </NavLink>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
