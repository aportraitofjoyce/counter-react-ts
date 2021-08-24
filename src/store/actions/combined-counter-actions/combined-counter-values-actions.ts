export const SET_MIN_VALUE = 'CombinedCounter/SET_MIN_VALUE'
export const SET_MAX_VALUE = 'CombinedCounter/SET_MAX_VALUE'

export const setMinValueAC = (minValue: number) => ({
    type: SET_MIN_VALUE,
    payload: minValue
}) as const

export const setMaxValueAC = (maxValue: number) => ({
    type: SET_MAX_VALUE,
    payload: maxValue
}) as const


export type CombinedCounterValuesActionsType = ReturnType<typeof setMinValueAC> | ReturnType<typeof setMaxValueAC>