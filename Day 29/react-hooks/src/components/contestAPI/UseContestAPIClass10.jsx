import React, { createContext, useEffect } from 'react'
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const UseContestAPIClass10 = () => {
  return (
    <div>
      <FirstName.Provider value={"shafi"}>
        <LastName.Provider value={"attar"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default UseContestAPIClass10 ;
export {FirstName,LastName};