import Home from "./components/functionalcomponents/Home";
import About from "./components/functionalcomponents/About";
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
import UseCallback from "./components/functionalcomponents/Hooks/UseCallback";
import UseMemoize from "./components/functionalcomponents/Hooks/UseMemoize";
import HoC from './components/functionalcomponents/HoC/HoC'
import Parent from "./components/functionalcomponents/Memoization/Parent";
import LazyLoadingAndSuspense from "./components/functionalcomponents/Memoization/LazyLoadingAndSuspense";
function App() {
  return (
    <main>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home properties="Hello SJIT" sjit="hello" />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/use-effect" element={<UseEffect />}></Route>
        <Route path="/use-effect-api" element={<UseEffectAPI />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/use-ref" element={<UseRef />}></Route>
        <Route path="/use-state" element={<UseState />}></Route>
        <Route path="/use-memoize" element={<UseMemoize></UseMemoize>}></Route>
        <Route path="/use-callback" element={<UseCallback />}></Route>
        <Route path="/hoc" element={<HoC/>}></Route>
        <Route path="/memo" element={<Parent></Parent>}></Route>
        <Route path="/lazy" element={<LazyLoadingAndSuspense></LazyLoadingAndSuspense>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <ClassCompEg></ClassCompEg> */}
      {/* <hr />
      <Home properties="Hello SJIT" sjit="hello"></Home>
      <div>
        <hr />
      </div>
     
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
