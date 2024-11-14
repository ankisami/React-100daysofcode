import { useState } from "react";
import "./App.css";

function App() {
  console.log("App re-rendered");

  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://www.100daysofcode.io/learn/reactjs"
        />
      </header>
      Day 1 - React challenge
      <p>Testing re-render component</p>
      <Component1 />
    </div>
  );
}

export default App;

const Component1 = (): React.JSX.Element => {
  console.log("Component1 re-rendered");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Component2 count={counter} setCounter={setCounter} />
    </div>
  );
};

const Component2 = ({
  count,
  setCounter,
}: {
  count: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element => {
  console.log("Component2 re-rendered");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Add element
      </button>
    </div>
  );
};
