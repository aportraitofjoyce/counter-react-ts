import {
    COUNTER_INCREASE,
    COUNTER_RESET,
    CounterActionsType,
    SET_NEW_MIN_COUNTER_VALUE
} from '../../actions/counter-actions/counter-actions'

type InitialStateType = typeof initialState

const initialState = {
    counterValue: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
    switch (action.type) {
        case COUNTER_INCREASE:
            return {...state, counterValue: state.counterValue + 1}

        case COUNTER_RESET:
        case SET_NEW_MIN_COUNTER_VALUE:
            return {...state, counterValue: action.payload}

        default:
            return state
    }
}



