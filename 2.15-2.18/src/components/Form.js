import React, { useState } from "react";
import axios from "axios";

function Form({ persons, addPersonHandler, updatePersonHandler }) {
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
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then(({ data }) => {
          addPersonHandler(data);
        });
    } else {
      const confirm = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirm) {
        const person = persons.find(({ name }) => name === newPerson.name);
        axios
          .patch(`http://localhost:3001/persons/${person.id}`, {
            id: person.id,
            number: newNumber,
          })
          .then(({ data }) => {
            updatePersonHandler();
          });
      }
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
