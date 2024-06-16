import React, {useState} from 'react'

function MyComponents() {

    const [ language, setLanguage]= useState(["C", "C++","Java"]);

    function handleAddLanguage(){

        //retrieves the value entered by the user in the input field with the ID "languageInput"
        const newLang = document.getElementById("languageInput").value; 

        document.getElementById("languageInput").value = ""; //Clears the input field after the value is captured.

        setLanguage(l => [...l, newLang]); //arrow function takes the current state (l) as argument. (...) spread       operator is used to copy the array
    }

    function handleRemoveLanguage(index){

        setLanguage(language.filter((_, i) => i !== index));
        //The filter method is used to create a new array containing only elements that pass a specific test implemented by the provided callback function.
        //The filter method iterates through each element (_) in the array along with its index (i).
        // The callback function ((i) => i !== index) only returns elements where the index (i) is not equal to the provided index.
    }
  return (
    <div className='language-update'>
        <h2>List of Languages</h2>
        <ul>
            {language.map((lang, index) => 
            <li key={index} onClick={() => handleRemoveLanguage(index)}>
                {lang}
                </li>)}

                {/* -A list item (li) is created to display the language name ({lang}).
                -The key prop is assigned the index to help React efficiently update the list.
                -The onClick event handler is set to call the handleRemoveLanguage function with the current index when -the list item is clicked, enabling language removal. */}

        </ul>
        <input type ="text" id="languageInput" placeholder='Enter Programming Languages'/>
        <button onClick={handleAddLanguage}>Add Language</button>
    </div>
  )
}

export default MyComponents
