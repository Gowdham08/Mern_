import Home from "./components/functionalcomponents/home";
import About from "./components/functionalcomponents/about";
import Contact from "./components/functionalcomponents/Contact";
import Gallery from "./components/functionalcomponents/Gallery";
import Login from "./components/functionalcomponents/Login";
import NavBar from "./components/functionalcomponents/NavBar";
import Signup from "./components/functionalcomponents/Signup";
// import ClassCompEg from "./components/classcomponents/ClassCompEg";
import UseEffectAPI from "./components/functionalcomponents/Hooks/UseEffectAPI";
import UseEffect from "./components/functionalcomponents/Hooks/UseEffect";
import UseRef from "./components/functionalcomponents/Hooks/UseRef"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UseState from "./components/functionalcomponents/Hooks/UseState";
import "../src/components/css/NavBar.css";
import UseMemo from "./components/functionalcomponents/Hooks/UseMemo";
function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home properties="Hello SJIT" sjit="hello"></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/use-effect" element={< UseEffect></ UseEffect>}></Route>
        <Route path="/use-effect-api" element={< UseEffectAPI></ UseEffectAPI>}></Route>
        <Route path="/use-ref" element={<UseRef></UseRef>}></Route>
        <Route path="/use-state" element={<UseState></UseState>}></Route>
        <Route path="/use-memo" element={<UseMemo></UseMemo>}></Route>

      </Routes>
    </BrowserRouter>
    {/* <ClassCompEg></ClassCompEg> */}
      {/* <hr />
      <Home properties="Hello SJIT" sjit="hello"></Home>
      <hr />
     
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
      <hr /> */}
    </main>
  )
}

export default App;
