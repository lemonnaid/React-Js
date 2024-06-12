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



function App() {

  return(
    <>
     {/* <UserGreeting isLoggedIn={false} username="Binda"/>
     <Card/>
     <Button/>
     <Login/>
     <Signup/>
     <Propexample name ="Binda" project="Learning With Leapfrog" day={5} isActive={true}/>
     <Propexample name ="Lemon" project="Learn about props" day={50} isActive={false}/>
     <Propexample />

     <Counter/>

     <Count/>
     <Colors/> */}

     <MyComponent/>

    </>
  );
}

export default App
