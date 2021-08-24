import React, {ChangeEvent} from 'react'
import '../../App.css'
import {HashRouter, Redirect, Route} from 'react-router-dom'
import {DisplayCombined} from './Display/DisplayCombined'
import {SettingsCombined} from './Settings/SettingsCombined'

type CombinedCounterType = {
    counterValue: number
    maxValue: number
    minValue: number
    settings: boolean
    inputValidation: boolean
    setMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setNewMinCounterValue: () => void
    counterIncrease: () => void
    counterReset: () => void
    buttonsValidation: buttonsValidationType
}

type buttonsValidationType = {
    increaseButtonDisable: boolean
    resetButtonDisable: boolean
}

export const CombinedCounter: React.FC<CombinedCounterType> = (props) => {
    return (
        <div className={'wrapper'}>
            <HashRouter>
                <Route path={'/'} exact render={() => <Redirect to={'/display'}/>}/>
                <Route path={'/settings'} render={() => <SettingsCombined maxValue={props.maxValue}
                                                                          minValue={props.minValue}
                                                                          settings={props.settings}
                                                                          setMinValue={props.setMinValue}
                                                                          setMaxValue={props.setMaxValue}
                                                                          setNewMinCounterValue={props.setNewMinCounterValue}
                                                                          inputValidation={props.inputValidation}
                />}/>
                <Route path={'/display'} render={() => <DisplayCombined counterValue={props.counterValue}
                                                                        maxValue={props.maxValue}
                                                                        minValue={props.minValue}
                                                                        settings={props.settings}
                                                                        counterIncrease={props.counterIncrease}
                                                                        counterReset={props.counterReset}
                                                                        inputValidation={props.inputValidation}
                                                                        buttonsValidation={props.buttonsValidation}
                />}/>
            </HashRouter>
        </div>
    )
}