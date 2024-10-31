import React, { useState } from "react";
import "./App.css";
import "./components/MedalList";
import MedalList from "./components/MedalList";
import MedalForm from "./components/MedalForm";

const App = () => {
  const [results, setResults] = useState([]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addResultHandler = (e) => {
    e.preventDefault();

    const newresults = {
      id: new Date().getTime(),
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    setResults([...results, newresults]);

    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const updateResultHandler = (country) => {
    const updateResult = results.map((result) => {
      if (result.country === country) {
        return {
          ...result,
          gold: gold,
          silver: silver,
          bronze: bronze,
        };
      }
    });
    setResults(updateResult);
  };

  const deleteResultHandler = (id) => {
    const deleteResult = results.filter((result) => {
      return result.id !== id;
    });
    setResults(deleteResult);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>
        <MedalForm
          country={country}
          setCountry={setCountry}
          gold={gold}
          setGold={setGold}
          silver={silver}
          setSilver={setSilver}
          bronze={bronze}
          setBronze={setBronze}
          addResultHandler={addResultHandler}
          updateResultHandler={updateResultHandler}
        />
        <MedalList
          results={results}
          deleteResultHandler={deleteResultHandler}
        />
      </div>
    </div>
  );
};

export default App;
