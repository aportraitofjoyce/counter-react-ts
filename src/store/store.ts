import {combineReducers, createStore} from 'redux'
import {counterReducer} from './reducers/counter-reducer'
import {counterValuesReducer} from './reducers/counter-values-reducer'

const rootReducer = combineReducers(
    {
        counter: counterReducer,
        counterValues: counterValuesReducer
    }
)

export const store = createStore(rootReducer)

export type StateType = ReturnType<typeof rootReducer>

type StoreType = typeof store