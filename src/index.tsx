import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {CounterContainer} from './components/Counter/CounterContainer'
import {CombinedCounterContainer} from './components/CombinedCounter/CombinedCounterContainer'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterContainer/>
            <CombinedCounterContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
