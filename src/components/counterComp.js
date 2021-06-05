import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from '../redux/counter/counter.actions';

function CounterComp() { //this is a sample component for testing if redux is connected properly or not.
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(decreaseCounter())}>decrease</button>
            <button onClick={() => dispatch(increaseCounter())}>increase</button>
        </div>
    );
}

export default CounterComp;