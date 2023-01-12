import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return(
        <Navbar>
          <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="Title">
                <h1>React App</h1>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
export default NavBar;