import './employee-add-form.css';
import {Component} from "react";

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (e) => {
        /**have to you preventDefault() to prevent a browser reload/refresh*/
        e.preventDefault();
        this.props.addEmployee(this.state.name, this.state.salary);
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="employee-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name={'name'}
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Employee's name"
                        onChange={this.onValueChange}/>
                    <input
                        type="text"
                        name={'salary'}
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="Salary $"
                        onChange={this.onValueChange}/>
                    <button
                        type="submit"
                        className="btn btn-outline-light">Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeeAddForm;
