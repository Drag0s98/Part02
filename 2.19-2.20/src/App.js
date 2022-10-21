import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

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
      <Notification message={message} errorMessage={errorMessage} />
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h2>Numbers</h2>
      <Form
        addPersonHandler={addPersonHandler}
        persons={persons}
        updatePersonHandler={updatePersonHandler}
        setMessage={setMessage}
      />
      <Persons
        persons={filteredPersons.length > 0 ? filteredPersons : persons}
        deletePersonHandler={deletePersonHandler}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
