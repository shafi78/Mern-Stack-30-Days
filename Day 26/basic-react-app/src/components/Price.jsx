import React from 'react'

const Price = ({oldPrice,newPrice}) => {

    let oldStyles = {
        textDecoration: "line-through",
    }

    let newStyles = {
        fontWeight: "bold",
    }

    let styles = {
        backgroundColor: "#e0c367",
        height: "32px",
        width: "200px",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
    }

  return (
    <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={newStyles}>{newPrice}</span>
    </div>
  )
}

export default Price