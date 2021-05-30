import React from "react";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from '../redux/counter/counter.actions';

function CounterComp(props) { //this is a sample component for testing if redux is connected properly or not.
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={props.decreaseCounter}>decrease</button>
            <button onClick={props.increaseCounter}>increase</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {count: state.counter.count}
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComp);