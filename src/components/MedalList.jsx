import { useState } from "react";

const MedalList = ({ results, deleteResultHandler }) => {
  const [sortBy, setSortBy] = useState("gold");

  const sortedResults = [...results].sort((a, b) => {
    if (sortBy === "gold") {
      return b.gold - a.gold;
    } else if (sortBy === "total") {
      return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze);
    }
  });

  return (
    <div>
      {results.length > 0 ? (
        <div className="table-container">
          <div className="sort-container">
            <button onClick={() => setSortBy("gold")} className="gold-sort">
              금메달 기준 정렬
            </button>
            <button onClick={() => setSortBy("total")} className="total-sort">
              총메달 기준 정렬
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">국가명</th>
                <th scope="col">금메달</th>
                <th scope="col">은메달</th>
                <th scope="col">동메달</th>
                <th scope="col">액션</th>
              </tr>
            </thead>
            <tbody>
              {sortedResults.map(({ id, country, gold, silver, bronze }) => (
                <tr key={id}>
                  <td>{country}</td>
                  <td>{gold}</td>
                  <td>{silver}</td>
                  <td>{bronze}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => {
                        deleteResultHandler(id);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      )}
    </div>
  );
};

export default MedalList;
