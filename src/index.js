import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

export default async () => {
  const tokenURL =
    "http://newsapi.org/V2/everything?q=bitcoin&from=2019-11-30&sortBy=published At&apikey=276f4a2baad840b7ad63b74c039140e8";

  try {
    const response1 = await axios.get(tokenURL);
    return response1;
  } catch {
    return "  ";
  }
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
