import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function SignUp() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            navigate("/");
        }
        setValidated(true);
    };

    return (
        <Container className="d-flex justify-content-center bg-white p-4">
            <Card style={{width: "20rem"}} className="p-2">
                <h6 className="text-center fs-5 text-primary">Create new account</h6>
                <Form className="m-2" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Enter First name</Form.Label>
                        <Form.Control type="text" placeholder="First Username" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Enter last name</Form.Label>
                        <Form.Control type="text" placeholder="Last Username" required />
                        <Form.Control.Feedback type="invalid">Please choose a last name.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicemail">
                        <Form.Label>Enter </Form.Label>
                        <Form.Control type="email" placeholder="Enter Email-Id" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Create a account
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}
export default SignUp;
