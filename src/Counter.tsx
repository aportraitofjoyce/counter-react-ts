import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterDisplay} from "./components/CounterDisplay/CounterDisplay";

const Counter = () => {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(minValue)

    useEffect(() => {
        const counterValueString = localStorage.getItem('counterValue')
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
        localStorage.setItem('counterValue', JSON.stringify(counter))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [counter, minValue, maxValue])

    const validation = () => {
        if (minValue >= maxValue) return true
        if (minValue < 0 || maxValue < 0) return true
    }

    return (
        <div className={'wrapper'}>
            <CounterSettings maxValue={maxValue}
                             minValue={minValue}
                             setMinValue={setMinValue}
                             setMaxValue={setMaxValue}
                             setCounter={setCounter}
                             validation={validation}
            />

            <CounterDisplay counter={counter}
                            maxValue={maxValue}
                            minValue={minValue}
                            setCounter={setCounter}
                            validation={validation}
            />
        </div>
    );
};

export default Counter;