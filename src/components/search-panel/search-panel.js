import "./search-panel.css";

const SearchPanel = ({ query, setQuery }) => {
  function handleInputChange(e) {
    setQuery(e.target.value);
  }
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={query}
      onChange={handleInputChange}
    />
  );
};
export default SearchPanel;
