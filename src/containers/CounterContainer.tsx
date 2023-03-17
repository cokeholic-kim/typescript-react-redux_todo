import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../module';
import { increase,decrease } from '../module/counter';

const CounterContainer = () => {
    const count = useSelector((state:RootState)=>state.counter.count)
    const dispatch = useDispatch()

    const onIncrease = ()=>{
        dispatch(increase())
    }
    const onDecrease = ()=>{
        dispatch(decrease())
    }

    return (
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

export default CounterContainer;