import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import genie from "../../assets/Genie.gif"
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`fw-bolder  ${style.Navbar}`}
        style={{ backgroundColor: "#7137D5" }}
      >
        <Container fluid>
          <i
            className="fas fa-bars text-light me-2 d-lg-none ms-3"
            onClick={handleMenuClick}
          />
          <Navbar.Brand href="#" className="text-light   " >
            <img src={genie} alt="" width={65} />
            Task Genie
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-center">
              <h5 className="btn btn-ghost d-none d-md-block ">
                Home
              </h5>
            </Nav.Link>
            <Nav.Link href="#" className="text-center">
              <h5 className="btn btn-ghost d-none d-md-block ">DashBoard</h5>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto ">
            <Button variant="outline-light">Login</Button>
          </Nav>

          {showMenu && (
            <Nav
              className={`${style.mobileMenu} d-lg-none d-flex flex-column align-items-start shadow`}
            >
              <Nav.Link href="#$" className={`text-dark `}>
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                DashBoard
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
