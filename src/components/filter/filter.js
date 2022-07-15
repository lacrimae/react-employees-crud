import {Component} from "react";
import './filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
        this.props.onUpdateFilter(filter);
    }

    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={() => this.onUpdateFilter("all")}
                    defaultChecked={true}>
                    All employees
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={() => this.onUpdateFilter("promoted")}>
                    Employees for promotion
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={() => this.onUpdateFilter("favorite")}>
                    Favorite employees
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={() => this.onUpdateFilter("moreThan1000")}>
                    Salary more than $1000
                </button>
            </div>
        );
    }
}

export default Filter;
