import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyComponent, Header} from "./App";

const elem = <h2>Hello World!</h2>;
const text = "some text";
/*create element w/o jsx*/
// const elem = React.createElement('h2', null, 'Hello World!!!');
const elem2 = (
    <div>
        <h1>Text:{text}</h1>
        <input type="text"/>
        <button>click</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // elem2
    // <React.StrictMode>
    //   <App/>
    // </React.StrictMode>
    <StrictMode>
        <MyComponent/>
    </StrictMode>
);
reportWebVitals();
