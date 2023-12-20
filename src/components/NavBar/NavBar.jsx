import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { UseGetCategories } from '../../hooks/UseProducts';
const NavBar = () => {

    const { categories } = UseGetCategories();

    return (
        <Navbar expand="lg" className="Container-NvBar">
            <Container>
                <Link to="/"> BOOK-SHOPP!!! </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="#home"> Home </Nav.Link>
                        <Nav.Link href="#link"> Contact </Nav.Link>

                        <NavDropdown title="List" id="basic-nav-dropdown">
                            {
                                categories.map((category, index) => {
                                    return (
                                        <NavDropdown key={index}>
                                            <Link key={index} to={`/category/${category }`}> {category} </Link>
                                        </NavDropdown>
                                    )
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;