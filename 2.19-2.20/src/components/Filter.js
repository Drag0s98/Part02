import React from "react";

function Filter({ persons, setFilteredPersons }) {
  const handlerFilter = (e) => {
    const filter = persons.filter((person) => {
      return person.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredPersons(filter);
  };
  return (
    <div>
      filter shown with{" "}
      <input type="text" onChange={handlerFilter} name="filter" id="filter" />
    </div>
  );
}

export default Filter;
