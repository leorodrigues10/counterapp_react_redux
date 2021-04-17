import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../redux/action'
import './counter.css'

function Counter () {

    const count = useSelector(state => state);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment())
    }

    const dec = () => {
        dispatch(decrement())
    }

    return (
        <div className="counter">
            <button onClick={dec} className="less"> - </button>
            <p>{count}</p>
            <button onClick={inc} className="plus">+</button>
        </div>
    )
}
export default Counter;