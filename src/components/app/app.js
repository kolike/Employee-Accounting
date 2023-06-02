import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Nikolas Fon Peroff', salary:625, increase:true, id:1},
                {name: 'Anton Killer', salary:12500, increase:true, id:2},
                {name: 'Sir-gay Sherstyouk', salary:625, increase:false, id:3},
                {name: 'Artyom Enlightened', salary:500, increase:false, id:4},
                {name: 'Dmitriy SoloSnev', salary:1000, increase:true, id:5}
            ]
        }
    }
    
deleteItem = (id) => {
    this.setState (({data})=> {
return {data:data.filter(item=> item.id !==id)}
    })
}
addEmployee = (e) => {
 e.preventDefault();

}



render() {
    return (
        <div className='app'>
            <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/> 
                    <AppFilter/>
                </div>
            <EmployeesList data={this.state.data}
            onDelete={this.deleteItem}/>
            <EmployeesAddForm/>
        </div>
            );
}

}

export default App;