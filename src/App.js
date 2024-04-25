import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(process.env.REACT_APP_API_URL);

    if (!res.ok) {
      throw new Error("Error whilw fetching api");
    }
    const data = await res.json();
    setIsLoading(false);
    console.log("DATA", data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {JSON.stringify(data)}
      </header>
    </div>
  );
}

export default App;
