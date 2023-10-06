import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './components/content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="header">Header</Nav.Link>
            <Nav.Link href="footer">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='header' element={<Header></Header>}></Route>
        <Route path='footer' element={<Footer></Footer>}></Route>
        {/* <Route path='/read' element={<Content></Content>}></Route> */}
      </Routes>
      {/* <Header></Header> 
       <Footer></Footer>  */}
     {/* <h1>Hello World!</h1>
     <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
     
    </div>
    </BrowserRouter>
  );
}

export default App;
