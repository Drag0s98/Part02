import React, { useState } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const addPersonHandler = (newPerson) => {
    setPersons([...persons, newPerson]);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Numbers</h2>
      <Form updatePersons={addPersonHandler} persons={persons} />
      <Persons
        persons={filteredPersons.length > 0 ? filteredPersons : persons}
      />
    </div>
  );
};

export default App;
