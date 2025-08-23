import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
const Navbar = () => {
    return (
      
            <div
                className="d-flex justify-content-between bg-white align-items-center p-1"
                style={{border: "2px solid #d4d8d8"}}
            >
                <h2 style={{fontSize: "22px"}} className="ps-5 text-primary">
                    Online Code Editor
                </h2>
                <NavLink to="/login">
                    <Button variant="white" className="text-primary me-3">
                        LOGIN
                    </Button>
                </NavLink>
            </div>
       
    );
};
export default Navbar;
