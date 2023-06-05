import './app-info.css';

const AppInfo = ({data}) => {

let el = 0;
data.forEach(element => {
    if (element.increase) {
        el++;
    }
});

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ООО "ЦПО"</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {el} </h2>
        </div>
    )
}

export default AppInfo;