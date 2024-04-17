import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_ITEMS } from "../api";

function Item({ name, id, deleteId, checkbox, description }) {
  const checkboxBoolean = checkbox === 0 ? false : true;
  const [isChecked, setIsChecked] = useState(checkboxBoolean);

  async function updateCheckbox() {
    await axios
      .put(`${API_ITEMS}/checkbox/${id}`, { checkbox: !isChecked })
      .then(() => {
        setIsChecked(!isChecked);
        console.log("checkbox update");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ display: "flex" }}>{name}</p>
      <Link to={`/edit/${id}`}>
        <button style={{ margin: "16px" }}>Edit</button>
      </Link>
      <button style={{ margin: "16px" }} onClick={() => deleteId(id)}>
        x
      </button>
      <input type="checkbox" onChange={updateCheckbox} checked={isChecked} />

      <p style={{ margin: "16px" }}>{description}</p>

      <button
        style={{
          height: "28px",
          width: "140px",
          margin: "16px",
          textAlign: "center",
        }}
      >
        text
      </button>
    </div>
  );
}

export default Item;
