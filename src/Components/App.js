import React, { useState } from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';


export default function App() {

    const [counter, setCounter] = useState(0);

    return (
        <React.Fragment>
            <div className="App">
                <CounterOutput counter={counter} />
                <br />
                <CounterInput setCounter={setCounter} counter={counter} />
            </div>
        </React.Fragment>
    )
}
