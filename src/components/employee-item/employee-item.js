import './employee-item.css';
import {Component} from "react";

class EmployeeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPromoted: false,
            isFavorite: false
        }
    }

    changeIsPromoted = () => {
        this.setState({
            isPromoted: !this.state.isPromoted
        });
    }

    changeFavorite = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        });
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {isPromoted, isFavorite} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        classNames = isPromoted ? classNames + ' promoted' : classNames;
        classNames = isFavorite ? classNames + ' favorite' : classNames;

        return (
            <li className={classNames}>
                <span className="list-group-item-label"
                      onClick={this.changeFavorite}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.changeIsPromoted}
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
