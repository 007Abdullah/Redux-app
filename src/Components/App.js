import React from 'react';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';


export default function App() {


    return (
        <React.Fragment>
            <div className="App">
                <CounterOutput />
                <br />
                <CounterInput />
            </div>
        </React.Fragment>
    )
}
