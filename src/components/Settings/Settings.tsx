import React, {ChangeEvent} from "react";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCounter: (counter: number) => void
    inputValidation: boolean | undefined
    settings: boolean
    setSettings: (settings: boolean) => void
}

export const Settings: React.FC<CounterSettingsPropsType> = (props) => {
    const declareMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
        props.setSettings(false)
    }

    const declareMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        props.setSettings(false)
    }

    const setMinValueToCounter = () => {
        props.setCounter(props.minValue)
        props.setSettings(true)
    }


    return (
        <div className='container'>
            <div className={'settingsInputContainer'}>
                <span>Min value</span>
                <Input value={props.minValue}
                       onChange={declareMinValue}
                       error={props.inputValidation}/>

            </div>

            <div className={'settingsInputContainer'}>
                <span>Max value</span>
                <Input value={props.maxValue}
                       onChange={declareMaxValue}
                       error={props.inputValidation}/>

            </div>

            <div className={'buttons'}>
                <Button name={'Set'} onClick={setMinValueToCounter}
                        disabled={props.settings || props.inputValidation}/>
            </div>
        </div>
    )
}

