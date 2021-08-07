import {React, useState} from "react"
import { useSelector,useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice";

function Counter() {
    const [amount, setAmount]= useState(0);

    const countValue = useSelector( (state) => state);
    const dispatch = useDispatch(); // using for call the actions

    return (
        <div>
            <h1>{countValue.counter.value}</h1>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br/><br/>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
            <button onClick = {() => dispatch(incrementByAmount(amount))}>Increment by amount</button>
        </div>
    )

}

export default Counter
