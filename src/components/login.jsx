import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";

import "../App.css";
function LOGIN() {
    return (
        <Container className="d-flex justify-content-center bg-white p-4">
            <Card style={{width: "18rem"}} className="p-2">
                <Form className="m-2">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <span>New account create </span>
                    <NavLink to="/signup">
                    <span className="text-primary" style={{fontSize: "15px", cursor: "pointer"}}>
                        New
                    </span>
                    </NavLink>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}

export default LOGIN;
