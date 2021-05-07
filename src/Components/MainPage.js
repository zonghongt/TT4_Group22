import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Mainpage = (props) => {
    const [menu, setMenuId] = useState(0)
    const [toggleBal, setToggleBal] = useState(false)
    const [Bal, setBal] = useState(true)

    return (
        <React.Fragment> {/*Component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. */}
            <Navbar bg="light" expand="lg">
                <a class="navbar-brand" href="#" onClick={() => setMenuId(0)}>TT4_Group22</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <a class="nav-item nav-link px-3" onClick={() => setMenuId(1)}>User Information</a>
                        <a class="nav-item nav-link px-3" onClick={() => setMenuId(2)}>View Balance</a>
                        <a class="nav-item nav-link px-3" onClick={() => setMenuId(3)}>Transaction History</a>
                        <a class="nav-item nav-link px-3" onClick={() => setMenuId(4)}>Transfer</a>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Mainpage;