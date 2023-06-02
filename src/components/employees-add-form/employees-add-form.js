import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        name:'',
                        salary:0
                }
        }
        onValueChange = (e) => {
        this.setState({
        [e.target.name]:e.target.value
})
        }
        addEmployee = (e,{data}) => {
                e.preventDefault();
                this.setState (({data})=> {
                        return {}
                
        })  
        }


render () {
        const {name, salary,addEmployee} = this.state;
        return (
                <div className="app-add-form">
                 <h3>Добавьте нового идиота</h3>
                 <form className='add-form d-flex'>
                     <input type='text'
                             className='form-control new-post-label'
                             placeholder='Как же его зовут?'
                             name = 'name'
                             value={name} 
                             
                             onChange={this.onValueChange}
                              />
                     <input type='number' 
                             className='form-control new-post-label' 
                             placeholder='З/П в $?'
                             name='salary' 
                             value={salary}
                             onChange={this.onValueChange}
                             />
                     <button type='submit'
                             className='btn btn-outline-light'
                             onClick={addEmployee}>Добавить</button>
                 </form>
                </div>  
             )
}
}

export default EmployeesAddForm;