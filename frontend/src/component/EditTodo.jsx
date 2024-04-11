import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTodo() {
  const API = "http://localhost:3000/items";
  let { id } = useParams();
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const result = await axios.get(`${API}/${id}`);
      console.log(result.data.name);
      setNewName(result.data.name);
    }
    getData();
  }, []);

  async function updateId(event) {
    event.preventDefault();
    await axios
      .put(`${API}/${id}`, { name: newName })
      .then(() => {
        console.log("id update");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>
        Edit Todo {id} {newName}
      </h1>
      <form onSubmit={updateId}>
        <label>
          Update Todo
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default EditTodo;
