import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterOutput() {
    const counter = useSelector((state) => state.counter)// ya function leta han or state kii value deta han
    /// Multiple Objext

    const obj = useSelector((state) => ({
        counter: state.counter,
        name: state.name
    }))
    console.log("how it", obj);
    return (
        <React.Fragment>
            Counter Value : {counter}
        </React.Fragment>
    )
}
