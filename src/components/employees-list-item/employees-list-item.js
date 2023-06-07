import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    increase,
    rise,
    onDelete,
    onToggleIncrease,
    onToggleRise,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }

  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleRise} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie" />
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
};

export default EmployeesListItem;
