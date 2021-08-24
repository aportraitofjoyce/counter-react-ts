import {
    CombinedCounterValuesActionsType, SET_MAX_VALUE,
    SET_MIN_VALUE
} from '../../actions/combined-counter-actions/combined-counter-values-actions'

type InitialStateType = typeof initialState

const initialState = {
    minValue: 0,
    maxValue: 5,
}

export const combinedCounterValuesReducer = (state: InitialStateType = initialState, action: CombinedCounterValuesActionsType): InitialStateType => {
    switch (action.type) {
        case SET_MIN_VALUE:
            return {...state, minValue: action.payload}

        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload}

        default:
            return state
    }
}