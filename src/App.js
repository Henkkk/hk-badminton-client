import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from "./components/Home";
import Create from "./components/Create";

import './style.css';

const App = () => {
  return (
    <>
    <Navbar expand="lg"  className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">約打羽毛球</Navbar.Brand>
          <Nav className="me-auto">
                <Nav.Link as={Link} to="/Create">開場</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </>
  );
};

export default App;