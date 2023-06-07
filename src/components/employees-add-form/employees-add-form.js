import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: 0,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addEmployee = (e) => {
    e.preventDefault();
    const { addItem } = this.props;
    if (this.state.name.length >= 3 && this.state.salary > 0) {
      addItem({ ...this.state, increase: false });
    } else {
      alert("vvedite korrekto name and salary");
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового идиота</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как же его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.addEmployee}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
