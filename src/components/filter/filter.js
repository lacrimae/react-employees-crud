import './filter.css';

const Filter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Employees for promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Salary more than $1000
            </button>
        </div>
    );
}

export default Filter;