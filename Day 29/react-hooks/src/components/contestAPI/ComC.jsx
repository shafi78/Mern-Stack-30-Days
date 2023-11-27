import React, { useContext } from 'react'
import {FirstName,LastName} from './UseContestAPIClass10'

const ComC = () => {
    const fname = useContext(FirstName);
  return (
    <div>
        My name is {fname}
    </div>
  )
}

export default ComC