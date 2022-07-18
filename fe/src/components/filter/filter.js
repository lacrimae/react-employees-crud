import './filter.css';

const Filter = (props) => {
    //todo: show a specific message if there are no employees
    const buttons = [
        {name: 'all', label: 'All employees'},
        {name: 'promoted', label: 'Employees for promotion'},
        {name: 'favorite', label: 'Favorite employees'},
        {name: 'moreThan1000', label: 'Salary more than $1000'}
    ];

    const buttonComponents = buttons.map(({name, label}) => {
        const {filter, onSelectFilter} = props;
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type='button'
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onSelectFilter(name)}>
                {label}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttonComponents}
        </div>
    );
}

export default Filter;
