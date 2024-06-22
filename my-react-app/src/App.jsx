import Button from "./Button";
import Login from "./Login/Login";
import Signup from "./Signup";
import Card from "./card";
import Propexample from "./Propsexample";
import UserGreeting from "./UserGreeting";
import Counter from "./Counter";
import Count from "./Count";
import Colors from "./Colors";
import MyComponent from "./onchange";
import ColorPicker from "./ColorPicker";
import MyComponents from "./updateArray";
import TodoList from "./TodoList";
import EffectComp from "./effect";
import Clock from "./Clock";
import ComponentA from "./ComponentA";
import StopWatch from "./StopWatch";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./navbar/Homepage";
import AboutMe from "./navbar/AboutMe";


function App() {

  return(
    <>
      <nav className="nav">
        <Link to ="/" className="nav-items">Homepage</Link>
        <Link to ="/about-me" className="nav-items">About Me</Link>
      </nav>
      <Routes>
      <Route path = "/" element ={<Homepage/>} />
      <Route path = "/about-me" element ={<AboutMe/>} />
      </Routes>

      
     {/* <UserGreeting isLoggedIn={false} username="Binda"/>
     <Card/>
     <Button/>
     <Login/>
     <Signup/>
     <Propexample name ="Binda" project="Learning With Leapfrog" day={5} isActive={true}/>
     <Propexample name ="Lemon" project="Learn about props" day={50} isActive={false}/>
     <Propexample />

     <Counter/> */}

     {/* <Count/> */}

     {/* <Colors/> */}

     {/* <MyComponent/> */}
     {/* <ColorPicker/> */}
      {/* <MyComponents/> */}
      {/* <TodoList/> */}
    {/* <EffectComp/> */}
      {/* <Clock/> */}
      {/* <ComponentA/> */}
      {/* <StopWatch/> */}
    </>
  );
}

export default App
