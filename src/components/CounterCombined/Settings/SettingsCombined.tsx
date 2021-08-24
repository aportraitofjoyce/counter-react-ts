import React, {ChangeEvent} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../Button/Button'
import {Input} from '../../Input/Input'

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

export const SettingsCombined: React.FC<CounterSettingsPropsType> = (props) => {
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
        <div className="container">
            <div className={'settingsInputWrapper'}>
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
            </div>

            <div className={'buttons'}>
                <Link to={'/display'}>
                    <Button name={'Set'} onClick={setMinValueToCounter}
                            disabled={props.inputValidation}/>
                </Link>
            </div>
        </div>
    )
}

