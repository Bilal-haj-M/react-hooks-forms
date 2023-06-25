import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
   console.log( setLastName(event.target.value))
  }

  function DisplayDat() {
    return (
      <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
      </div>
    );
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input 
      type="text" 
      value={firstName} 
      onChange={handleFirstNameChange} 
      />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <button type="submit">Submit</button>
      <DisplayDat/>
    </form>
  );
}

export default Form;
