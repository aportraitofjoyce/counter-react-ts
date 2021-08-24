import React, {ChangeEvent} from 'react'
import {Button} from '../../Button/Button'
import {Input} from '../../Input/Input'

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    inputValidation: boolean
    settings: boolean
    setNewMinCounterValue: () => void
    buttonsValidation: boolean
}

export const Settings: React.FC<CounterSettingsPropsType> = (props) => {
    return (
        <div className="container">
            <div className={'settingsInputWrapper'}>
                <div className={'settingsInputContainer'}>
                    <span>Min value</span>
                    <Input value={props.minValue}
                           onChange={props.setMinValue}
                           error={props.inputValidation}/>
                </div>

                <div className={'settingsInputContainer'}>
                    <span>Max value</span>
                    <Input value={props.maxValue}
                           onChange={props.setMaxValue}
                           error={props.inputValidation}/>
                </div>
            </div>

            <div className={'buttons'}>
                <Button name={'Set'} onClick={props.setNewMinCounterValue}
                        disabled={props.buttonsValidation}/>
            </div>
        </div>
    )
}