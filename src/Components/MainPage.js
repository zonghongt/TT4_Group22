import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from './styles';

import UserInfo from './UserInfo.js'
import {Balance} from './Balance.js'
import {Transfer} from './Transfer.js'


const Mainpage = (props) => {
    const [menu, setMenuId] = useState(0)
    const [toggleBal, setToggleBal] = useState(false)
    const [Bal, setBal] = useState(true)

    const handleLogout = () => {
        props.history.push('/');
    }

    //console.log("props", props)

    return (
        <React.Fragment> {/*Component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. */}
            <Navbar bg="light" expand="lg">
                <a class="navbar-brand" href="#" onClick={() => setMenuId(0)}>TT4_Group22</a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link class="nav-item nav-link px-3" navId = {1} menu={menu} onClick={() => setMenuId(1)}>User Information</Link>
                        <Link class="nav-item nav-link px-3" navId = {2} menu={menu} onClick={() => setMenuId(2)}>View Balance</Link>
                        <Link class="nav-item nav-link px-3" navId = {3} menu={menu} onClick={() => setMenuId(3)}>Transaction History</Link>
                        <Link class="nav-item nav-link px-3" navId = {4} menu={menu} onClick={() => setMenuId(4)}>Transfer</Link>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
            {//the showing of information depends on the menu
                (menu == 1) && <UserInfo {...props}></UserInfo>
            }
            {
                (menu == 2) && <Balance {...props}></Balance>
            }
            {
                (menu == 3) && <h1>TransactionHistory</h1>//<TransactionHistory {...props}></TransactionHistory>
            }
            {
                (menu == 4) && <Transfer {...props}></Transfer>
            }
        </React.Fragment>
    )
}

export default Mainpage;