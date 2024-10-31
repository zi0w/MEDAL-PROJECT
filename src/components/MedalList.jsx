const MedalList = ({ results, deleteResultHandler }) => {
  return (
    <div>
      {results.length > 0 ? (
        <div className="table-container">
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
              {results
                .sort((a, b) => {
                  return b.gold - a.gold;
                })
                .map(({ id, country, gold, silver, bronze }) => (
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
