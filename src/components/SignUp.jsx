import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function SignUp(){
    return( <Container className="d-flex justify-content-center bg-white p-4">
        <Card style={{width: "20rem"}} className="p-2">
            <h6 className="text-center fs-5 text-primary">Create  new account</h6>
            <Form className="m-2">
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Control type="text" placeholder="First Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Control type="text" placeholder="Last Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicemail">
                    <Form.Control type="email" placeholder="Enter Email-Id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Create a account
                </Button>
            </Form>
        </Card>
    </Container>)
}
export default SignUp;
