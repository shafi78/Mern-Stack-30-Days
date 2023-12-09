import React, { useReducer } from 'react'

const UseReducerClass2 = () => {

    const initialValue = 0 ;

    const reducer = (state,action) => {
        if (action.type === "INC") {
            state = state+1 ;
        }
        
        if (action.type === "DEC") {
            state>0 ? state=state-1 : 0 ; 
        }
        
        return state ;
    }
    
    const [count,dispatch] = useReducer(reducer , initialValue) ;

  return (
    <div>
        <button onClick={() => dispatch({type: "INC"})}>+</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type: "DEC"})}>-</button>
    </div>
  )
}

export default UseReducerClass2