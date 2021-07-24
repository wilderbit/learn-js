import React from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const [data, setData] = React.useState(null);
  const [newData, setNewData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data)
        });

    axios.get("/api/json")
        .then((resp) => {
            setNewData(resp.data);
        })
  });

  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
      <div>
          <ul className="users">
              {newData.map(user => (
                  <li className="user">
                      <p><strong>Name:</strong> {user.name}</p>
                  </li>
              ))}
          </ul>
      </div>
    </div>
  );
}

export default App;
