import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Counter} from './Counter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Counter/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
