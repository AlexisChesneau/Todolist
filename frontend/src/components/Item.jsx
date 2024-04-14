import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_CHECKBOX } from "../api";

function Item({ name, id, deleteId, checkbox }) {
  const checkboxBoolean = checkbox === 0 ? false : true;
  const [isChecked, setIsChecked] = useState(checkboxBoolean);

  async function updateCheckbox() {
    await axios
      .put(`${API_CHECKBOX}/${id}`, { checkbox: !isChecked })
      .then(() => {
        setIsChecked(!isChecked);
        console.log("checkbox update");
      })
      .catch((err) => console.log(err));
  }

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
    </div>
  );
}

export default Item;
