import React, { useState } from "react";

function Form({ persons, updatePersons }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handlerFormSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: e.target.personName.value,
      number: e.target.personNum.value,
    };

    //same name checking
    const haveSameName =
      persons.findIndex(({ name }) => name === newPerson.name) !== -1;

    if (!haveSameName && newPerson.name !== "") {
      updatePersons(newPerson);
    } else {
      alert(`${newPerson.name} is already added to phonebook`);
    }
  };

  return (
    <form onSubmit={handlerFormSubmit}>
      <div>
        name:{" "}
        <input
          type="text"
          id="personName"
          name="personName"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
        />
      </div>
      <div>
        number:{" "}
        <input
          type="text"
          id="personNum"
          name="personNum"
          onChange={(e) => setNewNumber(e.target.value)}
          value={newNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default Form;
