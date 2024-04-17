import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./App.css";
import { API_ITEMS } from "./api";
// import { API_TAGS } from "./api";

function App() {
  let [items, setItems] = useState([]);
  let [newId, setNewId] = useState("");
  let [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await axios.get(API_ITEMS);
      setItems(result.data);
    }
    getData();
  }, []);

  async function deleteId(id) {
    await axios
      .delete(`${API_ITEMS}/${id}`)
      .then(() => {
        console.log("id deleted");
        setItems((old) => [...old].filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  }

  async function addId(event) {
    event.preventDefault();
    console.log("dans addId");
    await axios
      .post(API_ITEMS, { name: newId, description: newDescription })
      .then(() => {
        console.log("name is added");
        setItems((old) => [
          ...old,
          { name: newId, description: newDescription },
        ]);
        resetChamp();
      })
      .catch((err) => console.log(err));
  }

  function resetChamp() {
    setNewId("");
    setNewDescription("");
  }

  return (
    <>
      <div>
        <form onSubmit={addId}>
          <label>
            New Todo
            <input
              style={{ margin: "16px" }}
              type="text"
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            />
          </label>
          <label>
            Description
            <input
              style={{ margin: "16px" }}
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </label>
          <input type="submit" hidden />
        </form>
        {items.map((item, idx) => (
          <Item
            deleteId={deleteId}
            key={idx}
            name={item.name}
            id={item.id}
            checkbox={item.checkbox}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
