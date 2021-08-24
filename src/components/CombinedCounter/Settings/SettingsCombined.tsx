import React, {ChangeEvent} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../Button/Button'
import {Input} from '../../Input/Input'

type SettingsCombinedPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    inputValidation: boolean
    settings: boolean
    setNewMinCounterValue: () => void
}

export const SettingsCombined: React.FC<SettingsCombinedPropsType> = (props) => {
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
                <Link to={'/display'}>
                    <Button name={'Set'} onClick={props.setNewMinCounterValue}
                            disabled={props.inputValidation}/>
                </Link>
            </div>
        </div>
    )
}

