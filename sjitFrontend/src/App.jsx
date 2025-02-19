import Home from "./components/functionalcomponents/home";
import About from "./components/functionalcomponents/about";
import Contact from "./components/functionalcomponents/Contact";
import Gallery from "./components/functionalcomponents/Gallery";
import Login from "./components/functionalcomponents/Login";
import NavBar from "./components/functionalcomponents/NavBar";
import Signup from "./components/functionalcomponents/Signup";
import ClassCompEg from "./components/classcomponents/ClassCompEg";
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home properties="Hello SJIT" sjit="hello"></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
      <hr />
      <Home properties="Hello SJIT" sjit="hello"></Home>
      <hr />
      <ClassCompEg></ClassCompEg>
      <h1>Welcome to React</h1>
      <hr />
      <About></About>
      <hr />
      <Contact></Contact>
      <hr />
      <Gallery></Gallery>
      <hr />
      <Login></Login>
      <hr />
      <Signup></Signup>
      <hr />
    </main>
  )
}

export default App;
