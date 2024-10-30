import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState([]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newResult = {
      id: new Date().getTime(),
      country: country,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    setResult([...result, newResult]);

    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };
  console.log(result);
  return (
    <div>
      <div className="container">
        <h1 className="title">2024 파리 올림픽</h1>
        <form className="input-container" onSubmit={onSubmitHandler}>
          <div className="input-box">
            <label>국가명</label>
            <input
              type="text"
              name="country"
              placeholder="국가 입력"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label>금메달</label>
            <input
              type="number"
              name="gold"
              value={gold}
              onChange={(e) => {
                setGold(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label>은메달</label>
            <input
              type="number"
              name="silver"
              value={silver}
              onChange={(e) => {
                setSilver(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <label>동메달</label>
            <input
              type="number"
              name="bronze"
              value={bronze}
              onChange={(e) => {
                setBronze(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <button type="submit">국가 추가</button>
            <button>업데이트</button>
          </div>
        </form>
        <div>
          <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
