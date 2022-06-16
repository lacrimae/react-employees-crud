import './info.css';

const Info = () => {
    return (
        <div className="info">
            <h1>Employees in the company</h1>
            <h2>
                The total number of employees in the company is:
                {/*{employees.length}*/}
            </h2>
            <h2>
                Employees which receive a bonus are:
            </h2>
        </div>
    );
}

export default Info;