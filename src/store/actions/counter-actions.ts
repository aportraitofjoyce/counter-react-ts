export const COUNTER_INCREASE = 'COUNTER_INCREASE'
export const COUNTER_RESET = 'COUNTER_RESET'
export const SET_NEW_MIN_COUNTER_VALUE = 'SET_NEW_MIN_COUNTER_VALUE'

export const counterIncreaseAC = () => ({
    type: COUNTER_INCREASE,
}) as const

export const counterResetAC = (value: number) => ({
    type: COUNTER_RESET,
    value: value
}) as const

export const setNewMinCounterValueAC = (value: number) => ({
    type: SET_NEW_MIN_COUNTER_VALUE,
    value: value
})

export type CounterActionsType =
    ReturnType<typeof counterIncreaseAC> |
    ReturnType<typeof counterResetAC> |
    ReturnType<typeof setNewMinCounterValueAC>