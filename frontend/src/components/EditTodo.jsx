import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ITEMS } from "../api";

function EditTodo() {
  let { id } = useParams();
  const [newName, setNewName] = useState("");
  let [newDescription, setNewDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const result = await axios.get(`${API_ITEMS}/${id}`);
      setNewName(result.data.name);
    }
    getData();
  }, []);

  async function updateId(event) {
    event.preventDefault();
    await axios
      .put(`${API_ITEMS}/${id}`, { name: newName, description: newDescription })
      .then(() => {
        console.log("id update");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Edit Todo : {newName}</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
        onSubmit={updateId}
      >
        <label>
          Update Todo :
          <input
            style={{ margin: "16px", height: "25px" }}
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>

        <label>
          Update Description :
          <input
            style={{ margin: "16px", width: "250px", height: "25px" }}
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  );
}

export default EditTodo;
