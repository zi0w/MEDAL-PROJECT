import MedalFormInput from "./MedalFormInput";

const MedalForm = ({
  country,
  setCountry,
  gold,
  setGold,
  silver,
  setSilver,
  bronze,
  setBronze,
  addResultHandler,
  updateResultHandler,
}) => {
  return (
    <form className="input-container" onSubmit={addResultHandler}>
      <MedalFormInput
        label="국가명"
        type="text"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        placeholder="국가 입력"
      />
      <MedalFormInput
        label="금메달"
        type="number"
        value={gold}
        max={99}
        min={0}
        onChange={(e) => {
          setGold(e.target.value);
        }}
      />
      <MedalFormInput
        label="은메달"
        type="number"
        value={silver}
        max={99}
        min={0}
        onChange={(e) => {
          setSilver(e.target.value);
        }}
      />
      <MedalFormInput
        label="동메달"
        type="number"
        value={bronze}
        max={99}
        min={0}
        onChange={(e) => {
          setBronze(e.target.value);
        }}
      />
      <div className="buttons">
        <button className="submit-button" type="submit">
          국가 추가
        </button>
        <button
          className="update-button"
          type="button"
          onClick={() => updateResultHandler(country)}
        >
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
