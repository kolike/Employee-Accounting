import "./app-info.css";

const AppInfo = ({ data }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании ООО "ЦПО"</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>
        Премию получат:
        {data.reduce((sum, item) => (item.increase ? sum + 1 : sum), 0)}
      </h2>
    </div>
  );
};

export default AppInfo;
