import React from 'react'
import TicketNum from './TicketNum'
import "./Ticket.css";

const Ticket = ({ticket}) => {
  return (
    <div className='Ticket'>
        <p>Ticket</p>
        {ticket.map((num,index) => (
            <TicketNum num={num} key={index} />
        ))}
    </div>
  )
}

export default Ticket