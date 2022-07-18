import './employee-item.css';

const EmployeeItem = (props) => {
    const {name, salary, onDelete, onToggleChange, isPromoted, isFavorite} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    classNames = isPromoted ? classNames + ' promoted' : classNames;
    classNames = isFavorite ? classNames + ' favorite' : classNames;

    return (
        <li className={classNames}>
                <span className="list-group-item-label"
                      onClick={onToggleChange}
                      data-toggle="isFavorite">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        onClick={onToggleChange}
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

export default EmployeeItem;
