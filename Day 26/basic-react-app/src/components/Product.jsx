import React from 'react'
import './Product.css';
import Price from './Price';

const Product = ({title,idx}) => {

  let oldPrices = ["12,495","11,900","1,599","599"];
  let newPrices = ["8,999","9,199","899","278"];
  let description = [["8000 DPI","Programmable button"],["intuitive surface","designed for Ipad pro"],["designed for Ipad pro","wireless"],["wireless","8000 DPI"]];

  return (
    <div className='Product'>
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  )
}

export default Product;