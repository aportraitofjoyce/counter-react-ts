import {combineReducers, createStore} from 'redux'
import {counterReducer} from './reducers/counter-reducers/counter-reducer'
import {counterValuesReducer} from './reducers/counter-reducers/counter-values-reducer'
import {combinedCounterReducer} from './reducers/combined-counter-reducers/combined-counter-reducer'
import {combinedCounterValuesReducer} from './reducers/combined-counter-reducers/combined-counter-values-reducer'

export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(
    {
        counter: counterReducer,
        counterValues: counterValuesReducer,
        combinedCounter: combinedCounterReducer,
        combinedCounterValues: combinedCounterValuesReducer,
    }
)

export const store = createStore(rootReducer)