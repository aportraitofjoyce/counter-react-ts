export const COUNTER_INCREASE = 'CombinedCounter/COUNTER_INCREASE'
export const COUNTER_RESET = 'CombinedCounter/COUNTER_RESET'
export const SET_NEW_MIN_COUNTER_VALUE = 'CombinedCounter/SET_NEW_MIN_COUNTER_VALUE'

export const counterIncreaseAC = () => ({
    type: COUNTER_INCREASE,
}) as const

export const counterResetAC = (minValue: number) => ({
    type: COUNTER_RESET,
    payload: minValue
}) as const

export const setNewMinCounterValueAC = (minValue: number) => ({
    type: SET_NEW_MIN_COUNTER_VALUE,
    payload: minValue
})

export type CombinedCounterActionsType =
    ReturnType<typeof counterIncreaseAC> |
    ReturnType<typeof counterResetAC> |
    ReturnType<typeof setNewMinCounterValueAC>