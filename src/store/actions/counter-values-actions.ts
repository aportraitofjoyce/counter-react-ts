export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'

export const setMinValueAC = (minValue: number) => ({
    type: SET_MIN_VALUE,
    payload: minValue
}) as const

export const setMaxValueAC = (maxValue: number) => ({
    type: SET_MAX_VALUE,
    payload: maxValue
}) as const


export type CounterValuesActionsType = ReturnType<typeof setMinValueAC> | ReturnType<typeof setMaxValueAC>