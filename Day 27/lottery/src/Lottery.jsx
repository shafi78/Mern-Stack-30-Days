import React from 'react'
import { useState } from 'react'
import { genTicket,sum } from './helper';
import Ticket from './Ticket';

const Lottery = ({n=3,winningSum=15}) => {

    const [ticket,setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum ;

    let buyTicket = () => {
      setTicket(genTicket(n));
    }


  return (
    <div>
        <h1>Lottery Game ( 15 )</h1>
        <Ticket ticket={ticket} />
        <br />
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning ? "Congratulations, you won!" : "Try again!" }</h3>
    </div>
  )
}

export default Lottery