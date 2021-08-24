import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {CounterCombined} from './components/CounterCombined/CounterCombined'
import {Provider} from 'react-redux'
import {store} from './store/store'
import {CounterContainer} from './components/Counter/CounterContainer'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterContainer/>
            {/*<CounterCombined/>*/}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
