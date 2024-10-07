import "./App.css";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("pikachu");
  const {data, setData} = useState();

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title title="Pokemon Finder" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
