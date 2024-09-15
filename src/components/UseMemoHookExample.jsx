import React, { useMemo, useState } from 'react'

function UseMemoHookExample() {
    const [number, setNumber]=useState(0);
    const [count, setCount]=useState(0)


    const factorial=(n)=>{
        if (n<0) return -1;
        if(n===0) return 1;
        return n*factorial(n-1)

    };



    const result=useMemo(()=>factorial(number),[number])
  return (
    <div>
        <h1>UseMemo Hook Explain</h1>
        <h1>Calculate the factorial of a Number</h1>
        <input
            type='number'
            value={number}
            onChange={(e)=>setNumber(Number(e.target.value))}
            min="0"
        
        />
        <h1>Factorial Result: {result}</h1>
        <button onClick={()=>setCount(count+1)}>Rendered ({count})</button>
        
        
    </div>
  )
}

export default UseMemoHookExample