import React, {ChangeEvent, useState} from 'react'
import {Counter} from './Counter'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../../store/store'
import {counterIncreaseAC, counterResetAC, setNewMinCounterValueAC} from '../../store/actions/counter-actions'
import {setMaxValueAC, setMinValueAC} from '../../store/actions/counter-values-actions'

export const CounterContainer = () => {
    const [settings, setSettings] = useState(true)
    const {counterValue} = useSelector((state: StateType) => state.counter)
    const {minValue, maxValue} = useSelector((state: StateType) => state.counterValues)

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
        setButtonDisable: settings || inputValidation
    }

    /*useEffect(() => {
        const counterValueString = localStorage.getItem('counter')
        if (counterValueString) {
            const counterValueNumber = JSON.parse(counterValueString)
            setCounter(counterValueNumber)
        }

        const minValueString = localStorage.getItem('minValue')
        if (minValueString) {
            const minValueNumber = JSON.parse(minValueString)
            setMinValue(minValueNumber)
        }

        const maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            const maxValueNumber = JSON.parse(maxValueString)
            setMaxValue(maxValueNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [counter, minValue, maxValue])*/

    return (
        <>
            <Counter counterValue={counterValue}
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