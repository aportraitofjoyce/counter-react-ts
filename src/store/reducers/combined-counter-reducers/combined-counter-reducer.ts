import {
    CombinedCounterActionsType,
    COUNTER_INCREASE, COUNTER_RESET, SET_NEW_MIN_COUNTER_VALUE
} from '../../actions/combined-counter-actions/combined-counter-actions'

type InitialStateType = typeof initialState

const initialState = {
    counterValue: 0,
}

export const combinedCounterReducer = (state: InitialStateType = initialState, action: CombinedCounterActionsType): InitialStateType => {
    switch (action.type) {
        case COUNTER_INCREASE:
            return {...state, counterValue: state.counterValue + 1}

        case COUNTER_RESET:
            return {...state, counterValue: action.payload}

        case SET_NEW_MIN_COUNTER_VALUE:
            return {...state, counterValue: action.payload}


        default:
            return state
    }
}

