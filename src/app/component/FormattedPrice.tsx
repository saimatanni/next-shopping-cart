import React from 'react'
type props ={
    amount:number;
    className?:string;
}
const FormattedPrice = ({amount}:props) => {
    const formattedAmount=new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
        maximumFractionDigits:2,
    })
  return (
    <div>
        <span>{formattedAmount}</span>
    </div>
  )
}

export default FormattedPrice