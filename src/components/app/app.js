import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Nikolas Fon Peroff', salary:625, increase:true, id:1},
        {name: 'Anton Killer', salary:12500, increase:true, id:2},
        {name: 'Sir-gay Sherstyouk', salary:625, increase:false, id:3},
        {name: 'Artyom Enlightened', salary:500, increase:false, id:4},
        {name: 'Dmitriy Aching', salary:1000, increase:true, id:5}
    ];


    return (
<div className='app'>
    <AppInfo/>
        <div className="search-panel">
            <SearchPanel/> 
            <AppFilter/>
        </div>
    <EmployeesList data={data}/>
    <EmployeesAddForm/>
</div>
    );
}

export default App;