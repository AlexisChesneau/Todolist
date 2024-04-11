import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [items, setItems] = useState([]);
  let [newId, setNewId] = useState("");

  const API = "http://localhost:3000/items";

  useEffect(() => {
    async function getData() {
      const result = await axios.get(API);
      setItems(result.data);
    }
    getData();
  }, []);

  async function deleteId(id) {
    await axios
      .delete(`${API}/${id}`)
      .then(() => {
        console.log("id deleted");
        setItems((old) => [...old].filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  }

  async function addId(event) {
    event.preventDefault();
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
        <form onSubmit={addId} action="submit">
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
          <div key={idx} style={{ display: "flex" }}>
            <p style={{ display: "flex", alignItems: "center" }}>{item.name}</p>
            <button
              onClick={() => deleteId(item.id)}
              style={{ margin: "16px" }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
