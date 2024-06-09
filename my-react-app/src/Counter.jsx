// React hook = special function that allows functional components to use react features without writing class components (useState, useEffect,useContext, useReducer, useCallback etc)

//useState() =  a React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM [name,setName]

import React, {useState} from 'react';  // import useState

function Counter(){ 
    const [name, setName] = useState("Guest");
    const [day, setDay] = useState(0);
    const [isStudent, setIsStudent] = useState(true);  

    const updateName = () => {
        setName("Binda");  
    }
    const incrementDay =() => {
        setDay(day +1);
    }
    const toggleStudentStatus = () => {
        setIsStudent(!isStudent);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set Name</button>
            <p>Day: {day}</p>
            <button onClick = {incrementDay}>Increment Day</button>
            <p> Is Student: {isStudent? "Yes" : "No"}</p>
            <button onClick = {toggleStudentStatus}>Student status</button>
        </div>
    );
}


export default Counter