import './employee-add-form.css';

const EmployeeAddForm = () => {
    return (
        <div className="employee-add-form">
            <h3>Add new employee</h3>
            <form
                className="add-form d-flex">
                <input
                     type="text"
                    className="form-control new-post-label"
                    placeholder="Employee's name"/>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Salary $"/>
                <button
                    type="submit"
                    className="btn btn-outline-light">Add
                </button>
            </form>
        </div>
    );
}

export default EmployeeAddForm;