import {CounterValuesActionsType, SET_MAX_VALUE, SET_MIN_VALUE} from '../actions/counter-values-actions'

const initialState = {
    minValue: 0,
    maxValue: 5,
}

export const counterValuesReducer = (state: InitialStateType = initialState, action: CounterValuesActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MIN_VALUE:
            return {...state, minValue: action.payload}

        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload}

        default:
            return state
    }
}

type InitialStateType = typeof initialState