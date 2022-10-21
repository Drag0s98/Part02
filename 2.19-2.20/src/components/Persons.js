import React from "react";
import axios from "axios";

function Persons({ persons, deletePersonHandler, setErrorMessage }) {
  const handleDeleteButton = (e) => {
    const id = e.target.value;
    const name = e.target.name;
    const confirm = window.confirm(`Delete ${name}?`);
    if (confirm) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(({ data }) => {
          deletePersonHandler(name);
        })
        .catch((err) => {
          setErrorMessage(
            `Information of ${name} has already been removed from server`
          );
        });
    }
  };

  return (
    <>
      {persons.map((person, i) => (
        <div key={person.name}>
          <p key={i}>
            {person.name} {person.number}
          </p>
          <button
            key={person.id}
            value={person.id}
            name={person.name}
            onClick={handleDeleteButton}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}

export default Persons;
