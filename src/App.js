import logo from './logo.svg';
import './App.css';
import {Component} from "react";
// components:
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    );
}

const Field = () => {
    return (
        <div>
            <input placeholder="Type here" type="text"/>
        </div>
    );
}

function Button() {
    // const res = () => {
    //     return 'log in';
    // };
    // const p = <p>log in</p>;
    const text = 'log in';
    const logged = true;
    return (
        <div>
            <button>{logged ? 'Enter' : text}</button>
        </div>
    );
}

class MyComponent extends Component {
    render() {
        const holder = 'Type here';
        const style = {
            backgroundColor: 'pink',
            width: '300px'
        };

        return (
            <div>
                <input
                    style={style}
                    type={'hi'}
                    placeholder={holder}
                />
            </div>
        );
    }
}


function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Button/>
        </div>
    );
}

export {Header, MyComponent};
export default App;
