import './employee-item.css';
import {Component} from "react";

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id, name, salary, isPromoted, isStarred, onDelete, onToggleChange, updateEmployee} = this.props;
        // let {name, salary, isPromoted, isStarred} = data;
        let classNames = 'list-group-item d-flex justify-content-between';
        classNames = isPromoted ? classNames + ' promoted' : classNames;
        classNames = isStarred ? classNames + ' favorite' : classNames;

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick={() => updateEmployee({id, name, salary, isPromoted, isStarred: !isStarred})}
                      data-toggle="isStarred">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={() => updateEmployee({id, name, salary, isStarred, isPromoted: !isPromoted})}
                            data-toggle="isPromoted"
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>

                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeeItem;
