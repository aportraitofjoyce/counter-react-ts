import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter, Redirect, Route} from "react-router-dom";
import {DisplayCombined} from "./components/Display/DisplayCombined";
import {SettingsCombined} from "./components/Settings/SettingsCombined";

export const CounterCombined = () => {
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [settings, setSettings] = useState(true)
    const [counter, setCounter] = useState<number>(minValue)

    useEffect(() => {
        const counterValueString = localStorage.getItem('counterCombined')
        if (counterValueString) {
            const counterValueNumber = JSON.parse(counterValueString)
            setCounter(counterValueNumber)
        }

        const minValueString = localStorage.getItem('minValueCombined')
        if (minValueString) {
            const minValueNumber = JSON.parse(minValueString)
            setMinValue(minValueNumber)
        }

        const maxValueString = localStorage.getItem('maxValueCombined')
        if (maxValueString) {
            const maxValueNumber = JSON.parse(maxValueString)
            setMaxValue(maxValueNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterCombined', JSON.stringify(counter))
        localStorage.setItem('minValueCombined', JSON.stringify(minValue))
        localStorage.setItem('maxValueCombined', JSON.stringify(maxValue))
    }, [counter, minValue, maxValue])

    const inputValidation = minValue >= maxValue || minValue < 0 || maxValue < 0

    return (
        <div className={'wrapper'}>
            <HashRouter>
                <Route path={'/'} exact render={() => <Redirect to={'/display'}/>}/>
                <Route path={'/settings'} render={() => <SettingsCombined maxValue={maxValue}
                                                                          minValue={minValue}
                                                                          setMinValue={setMinValue}
                                                                          setMaxValue={setMaxValue}
                                                                          setCounter={setCounter}
                                                                          inputValidation={inputValidation}
                                                                          settings={settings}
                                                                          setSettings={setSettings}
                />}/>
                <Route path={'/display'} render={() => <DisplayCombined counter={counter}
                                                                        maxValue={maxValue}
                                                                        minValue={minValue}
                                                                        setCounter={setCounter}
                                                                        inputValidation={inputValidation}
                                                                        settings={settings}
                />}/>
            </HashRouter>
        </div>
    );
};