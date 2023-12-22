import React from 'react'
import { cn } from '../lib/Utils';
type props ={
    amount:number;
    className?:string;
}
const FormattedPrice = ({amount, className}:props) => {
    const formattedAmount=new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
        maximumFractionDigits:2,
    })
  return (
    <div>
        <span className={cn("text-base text-black", className)}>{formattedAmount}</span>
    </div>
  )
}

export default FormattedPrice