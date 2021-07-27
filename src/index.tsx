import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Counter} from './Counter';
import reportWebVitals from './reportWebVitals';
import {CounterCombined} from "./CounterCombined";

ReactDOM.render(
    <React.StrictMode>
        <Counter/>
        <CounterCombined/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
