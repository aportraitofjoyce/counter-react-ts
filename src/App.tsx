import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";

function App() {
    const minValue = 0
    const maxValue = 5
    const [counter, setCounter] = useState<number>(minValue)

    const counterIncrease = () => {
        counter < maxValue && setCounter(counter + 1)
    }

    const counterReset = () => {
        setCounter(minValue)
    }

    return (
        <div className="wrapper">
            <Display counter={counter}/>
            <div className={'buttons'}>
                <Button name={'Increase'} callback={counterIncrease} disabled={counter === maxValue}/>
                <Button name={'Reset'} callback={counterReset} disabled={counter === minValue}/>
            </div>

        </div>
    );
}

export default App;
