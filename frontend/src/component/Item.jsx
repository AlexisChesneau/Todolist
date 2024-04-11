import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Item({ name, id, deleteId }) {
  //   const API = "http://localhost:3000/items";

  //   const [newName, setNewName] = useState(name);

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

  return (
    <div style={{ display: "flex" }}>
      <p style={{ display: "flex", alignItems: "center" }}>{name}</p>
      <Link to={`/edit/${id}`}>
        <button style={{ margin: "16px" }}>Edit</button>
      </Link>
      <button onClick={() => deleteId(id)} style={{ margin: "16px" }}>
        x
      </button>
      <input type="checkbox" />
      {/* <input value={newName} type="text" onChange={(e) => updateId(e)} /> */}
    </div>
  );
}

export default Item;
