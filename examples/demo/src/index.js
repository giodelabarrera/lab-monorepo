import React from "react";
import ReactDOM from "react-dom";
import helloWorld from "@lab-monorepo/hello-world";

const helloWorldText = helloWorld()

function App() {
  return <p>{helloWorldText}!</p>;
}

ReactDOM.render(<App />, document.getElementById("root"));
