import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/fireBase";
import { useNavigate } from "react-router-dom";
import { use } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent reload
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    else {
      try {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("🎉 Login successful!");

        navigate("/");

      } catch (err) {

        if (err.code === "auth/invalid-credential") {
          setError("Invalid email or password");
        }

        else if (err.code === "auth/user-not-found") {
          setError("User not found");
        }

        else if (err.code === "auth/wrong-password") {
          setError("Incorrect password");
        }

        else {
          setError("Something went wrong");
        }

      }
    }
    setValidated(true)
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

      <Card
        style={{ width: "22rem", borderRadius: "15px" }}
        className="shadow border-0 p-3"
      >

        <h3 className="text-center text-primary fw-bold mb-4">
          Login
        </h3>

        <Form
          className="m-2"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Label className="fs-5 ">
              Email Address
            </Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Form.Text className="text-muted">
              We'll never share your email.
            </Form.Text>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Label className="fs-5 ">
              Password
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </Form.Group>

          {error && (
            <p className="text-danger text-center small">
              {error}
            </p>
          )}

          <div className="text-center mt-3">
            <span>Don't have an account? </span>

            <NavLink
              to="/signup"
              className="text-primary fw-bold text-decoration-none"
            >
              Sign Up
            </NavLink>
          </div>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 fw-bold"
          >
            Login
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default Login;
