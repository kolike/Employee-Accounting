import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Nikolas Fon Peroff",
          salary: 625,
          increase: true,
          rise: true,
          id: 1,
        },
        {
          name: "Anton Killer",
          salary: 12500,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Sir-gay Sherstyouk",
          salary: 625,
          increase: false,
          rise: false,
          id: 3,
        },
        {
          name: "Artyom Enlightened",
          salary: 500,
          increase: false,
          rise: false,
          id: 4,
        },
        {
          name: "Dmitriy SoloSnev",
          salary: 1000,
          increase: true,
          rise: false,
          id: 5,
        },
      ],
      activeTab: 0,
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (item) => {
    this.setState(({ data }) => {
      return { data: [...data, { ...item, id: data[data.length - 1].id + 1 }] };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };
  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo data={this.state.data} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter
            activeTab={this.state.activeTab}
            setActiveTab={(tabIndex) => {
              this.setState({ activeTab: tabIndex });
            }}
          />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
