import {Button} from '../../Button/Button'
import React from 'react'
import {Link} from 'react-router-dom'

type DisplayCombinedPropsType = {
    counterValue: number
    maxValue: number
    minValue: number
    inputValidation: boolean
    settings: boolean
    counterIncrease: () => void
    counterReset: () => void
    buttonsValidation: {
        increaseButtonDisable: boolean
        resetButtonDisable: boolean
    }
}

export const DisplayCombined: React.FC<DisplayCombinedPropsType> = (props) => {
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

                <Link to={'/settings'}>
                    <Button name={'Set'}/>
                </Link>
            </div>
        </div>
    )
}