import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/fireBase";
function SignUp() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();
        }
        else {
            try {

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                alert("🎉 Account created successfully!");

                navigate("/");

            } catch (err) {

                if (err.code === "auth/email-already-in-use") {
                    setError("Email already exists");
                }

                else if (err.code === "auth/weak-password") {
                    setError("Password should be at least 6 characters");
                }

                else if (err.code === "auth/invalid-email") {
                    setError("Invalid email address");
                }

                else {
                    setError("Something went wrong");
                }

            }

        }
        setValidated(true);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

            <Card
                style={{ width: "24rem", borderRadius: "15px" }}
                className="shadow p-3 border-0"
            >

                <h3 className="text-center text-primary fw-bold mb-4">
                    Create Account
                </h3>

                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-6">First Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter first name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-6">Last Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            required
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter last name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-6">Email Address</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={email && !email.includes("@")}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fs-6">Password</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={password && password.length < 6}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {error && (
                        <p className="text-danger small text-center">
                            {error}
                        </p>
                    )}

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 fw-bold"
                    >
                        Create Account
                    </Button>

                </Form>
            </Card>

        </Container>
    );
}
export default SignUp;
