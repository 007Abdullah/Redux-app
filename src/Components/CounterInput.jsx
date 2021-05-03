import React from 'react';

export default function CounterInput(props) {
    return (
        <React.Fragment>
            <button onClick={() => props.setCounter(props.counter + 1)}>+</button>
            <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
        </React.Fragment>
    )
}
