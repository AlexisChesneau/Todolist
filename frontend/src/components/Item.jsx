import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_CHECKBOX } from "../api";

function Item({ name, id, deleteId, checkbox }) {
  const checkboxBoolean = checkbox === 0 ? false : true;
  const [isChecked, setIsChecked] = useState(checkboxBoolean);

  console.log(typeof isChecked);
  console.log(isChecked);

  async function updateCheckbox() {
    await axios
      .put(`${API_CHECKBOX}/${id}`, { checkbox: !isChecked })
      .then(() => {
        setIsChecked(!isChecked);
        console.log("checkbox update");
      })
      .catch((err) => console.log(err));
  }

  //   async function updateId(event) {
  //     event.preventDefault();
  //     setNewName(event.target.value);
  //     await axios
  //       .put(`${API}/${id}`, { name: event.target.value })
  //       .then(() => {
  //         console.log("id update");
  //       })
  //       .catch((err) => console.log(err));
  //   }

  // console.log(checkbox);

  return (
    <div style={{ display: "flex" }}>
      <p style={{ display: "flex", alignItems: "center" }}>{name}</p>
      <Link to={`/edit/${id}`}>
        <button style={{ margin: "16px" }}>Edit</button>
      </Link>
      <button onClick={() => deleteId(id)} style={{ margin: "16px" }}>
        x
      </button>
      <input type="checkbox" onChange={updateCheckbox} checked={isChecked} />
      {/* <input value={newName} type="text" onChange={(e) => updateId(e)} /> */}
    </div>
  );
}

export default Item;
