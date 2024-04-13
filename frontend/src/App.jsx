import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import "./App.css";
import { API_ITEMS } from "./api";

function App() {
  let [items, setItems] = useState([]);
  let [newId, setNewId] = useState("");

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
    // event.preventDefault();
    await axios
      .post(API, { name: newId })
      .then(() => {
        console.log("id added");
        setItems((old) => [...old, { name: newId }]);
        setNewId("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <form onSubmit={addId}>
          <label>
            New Todo
            <input
              type="text"
              value={newId}
              onChange={(e) => setNewId(e.target.value)}
            />
          </label>
        </form>
        {items.map((item, idx) => (
          <Item
            deleteId={deleteId}
            key={idx}
            name={item.name}
            id={item.id}
            checkbox={item.checkbox}
          />
        ))}
      </div>
    </>
  );
}

export default App;
