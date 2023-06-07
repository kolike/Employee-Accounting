import "./app-filter.css";

const AppFilter = ({ activeTab, setActiveTab }) => {
  const getTabClassName = (tabIndex) => {
    if (activeTab === tabIndex) {
      return "btn btn-light";
    }
    return "btn btn-outline-light";
  };

  return (
    <div className="btn-group">
      <button
        className={getTabClassName(0)}
        type="button"
        onClick={() => {
          setActiveTab(0);
        }}
      >
        Все сотрудники
      </button>
      <button
        className={getTabClassName(1)}
        type="button"
        onClick={() => {
          setActiveTab(1);
        }}
      >
        Сотрудники на повышение
      </button>
      <button
        className={getTabClassName(2)}
        type="button"
        onClick={() => {
          setActiveTab(2);
        }}
      >
        З/П больше 30000 т.руб.
      </button>
    </div>
  );
};

export default AppFilter;
