import React, {ChangeEvent} from 'react'
import '../../App.css'
import {Settings} from './Settings/Settings'
import {Display} from './Display/Display'

type CounterPropsType = {
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
    buttonsValidation: { increaseButtonDisable: boolean, resetButtonDisable: boolean }
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={'wrapper'}>
            <Settings maxValue={props.maxValue}
                      minValue={props.minValue}
                      settings={props.settings}
                      setMinValue={props.setMinValue}
                      setMaxValue={props.setMaxValue}
                      setNewMinCounterValue={props.setNewMinCounterValue}
                      inputValidation={props.inputValidation}
            />

            <Display counterValue={props.counterValue}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     settings={props.settings}
                     counterIncrease={props.counterIncrease}
                     counterReset={props.counterReset}
                     inputValidation={props.inputValidation}
                     buttonsValidation={props.buttonsValidation}
            />
        </div>
    )
}