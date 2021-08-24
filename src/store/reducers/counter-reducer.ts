import {
    COUNTER_INCREASE,
    COUNTER_RESET,
    CounterActionsType,
    SET_NEW_MIN_COUNTER_VALUE
} from '../actions/counter-actions'

const initialState = {
    counterValue: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: CounterActionsType): InitialStateType => {
    switch (action.type) {
        case COUNTER_INCREASE:
            return {...state, counterValue: state.counterValue + 1}

        case COUNTER_RESET:
            return {...state, counterValue: action.value}

        case SET_NEW_MIN_COUNTER_VALUE:
            return {...state, counterValue: action.value}


        default:
            return state
    }
}

type InitialStateType = typeof initialState

