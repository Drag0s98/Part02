import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const addPersonHandler = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const deletePersonHandler = (name) => {
    setPersons(persons.filter((person) => person.name !== name));
  };

  const updatePersonHandler = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(({ data }) => setPersons(data));
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(({ data }) => {
      setPersons(data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Numbers</h2>
      <Form
        addPersonHandler={addPersonHandler}
        persons={persons}
        updatePersonHandler={updatePersonHandler}
      />
      <Persons
        persons={filteredPersons.length > 0 ? filteredPersons : persons}
        deletePersonHandler={deletePersonHandler}
      />
    </div>
  );
};

export default App;
