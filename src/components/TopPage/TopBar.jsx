import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import './TopPage.scss';

//Bootstrap stuff
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

//React Icons
import {BsFillCartCheckFill} from 'react-icons/bs';

function TopBar() {
    const { cart } = useContext(DataContext);
    const cartItem = cart.total_items;

    return (
        <div className="topBar" >
            <Navbar expand="lg" sticky="top">
                <Container style={{minHeight: '3rem'}}>
                    <Navbar.Brand href="/">ShoPlant</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cart" className="cartBar"><BsFillCartCheckFill /> <b>{cartItem}</b></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar;
