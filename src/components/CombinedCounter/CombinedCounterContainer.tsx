import React, {ChangeEvent, useState} from 'react'
import {CombinedCounter} from './CombinedCounter'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {
    counterIncreaseAC,
    counterResetAC,
    setNewMinCounterValueAC
} from '../../store/actions/combined-counter-actions/combined-counter-actions'
import {
    setMaxValueAC,
    setMinValueAC
} from '../../store/actions/combined-counter-actions/combined-counter-values-actions'

export const CombinedCounterContainer = () => {
    const {counterValue} = useSelector((state: StateType) => state.combinedCounter)
    const {minValue, maxValue} = useSelector((state: StateType) => state.combinedCounterValues)
    const [settings, setSettings] = useState(true)
    const dispatch = useDispatch()

    const counterIncrease = () => {
        counterValue < maxValue && dispatch(counterIncreaseAC())
    }

    const counterReset = () => {
        dispatch(counterResetAC(minValue))
    }

    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(Number(e.currentTarget.value)))
        setSettings(false)
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        setSettings(false)
    }

    const setNewMinCounterValue = () => {
        dispatch(setNewMinCounterValueAC(minValue))
        setSettings(true)
    }

    const inputValidation = minValue >= maxValue || minValue < 0 || maxValue < 0

    const buttonsValidation = {
        increaseButtonDisable: counterValue === maxValue || !settings || inputValidation,
        resetButtonDisable: counterValue === minValue || !settings || inputValidation,
    }

    return (
        <>
            <CombinedCounter counterValue={counterValue}
                             minValue={minValue}
                             maxValue={maxValue}
                             settings={settings}
                             counterIncrease={counterIncrease}
                             counterReset={counterReset}
                             setMinValue={setMinValue}
                             setMaxValue={setMaxValue}
                             setNewMinCounterValue={setNewMinCounterValue}
                             inputValidation={inputValidation}
                             buttonsValidation={buttonsValidation}
            />
        </>
    )
}