import {Button} from '../../Button/Button'
import React from 'react'

type CounterDisplayPropsType = {
    counterValue: number
    maxValue: number
    minValue: number
    inputValidation: boolean | undefined
    settings: boolean
    counterIncrease: () => any
    counterReset: () => any
    buttonsValidation: { increaseButtonDisable: boolean, resetButtonDisable: boolean }
}

export const Display: React.FC<CounterDisplayPropsType> = (props) => {
    const displayClassName = props.counterValue === props.maxValue ? 'result maxResult' : 'result'

    return (
        <div className="container">
            <div className={'display'}>
                {
                    props.inputValidation ? <span className={'result displayTextError'}> Incorrect value! </span> :
                        !props.settings ? <span className={'result displayText'}> Enter values and press 'Set' </span> :
                            <span className={displayClassName}>{props.counterValue}</span>
                }
            </div>

            <div className={'buttons'}>
                <Button name={'Increase'}
                        onClick={props.counterIncrease}
                        disabled={props.buttonsValidation.increaseButtonDisable}/>
                <Button name={'Reset'}
                        onClick={props.counterReset}
                        disabled={props.buttonsValidation.resetButtonDisable}/>
            </div>
        </div>
    )
}