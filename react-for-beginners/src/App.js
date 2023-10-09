import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("i run all the time");
  const iRunOnlyOnece = () => {
    console.log("only once");
  };
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  useEffect(iRunOnlyOnece, []);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
