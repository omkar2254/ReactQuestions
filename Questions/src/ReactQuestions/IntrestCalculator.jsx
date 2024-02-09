import { useState } from 'react';
export default function IntrestCalculator(){
    const [principal, setPrincipal] = useState(1000)
    const handelPrincipalChange = (e)=>{
        setPrincipal(e.target.value);
    }

    const [rate, setRate] = useState(6);
    const handleRateChange = (e)=>{
        setRate(e.target.value);
    }

    const [time, setTime] = useState(2)
    const handleChangeTime = (e)=>{
        setTime(e.target.value);
    }

    const calSimpleIntrest = ()=>{
        const simpleIntrest = parseFloat((principal * rate * time)/100);
        return (simpleIntrest.toFixed(2));
    }

    const calTotalAmount = ()=>{
        const totalAmount = parseFloat(principal + calSimpleIntrest());
        return (totalAmount.toFixed(2));
    }

    return(
        <>
        <h1>Simple Intrest Calculator</h1>
        <label htmlFor="principal">Principle</label>
        <input type="number" id="principal" value={principal} onChange={handelPrincipalChange}/>
        <label htmlFor="rate">Rate</label>
        <input type="number" id="rate" value={rate} onChange={handleRateChange}  />
        <label htmlFor="time">Time</label>
        <input type="number" id="time" value={time} onChange={handleChangeTime}/>
        <div>
            <strong>Simple Intrest: </strong> ${calSimpleIntrest()}
        </div>
        <div>
            <strong>Total Amount: </strong> ${calTotalAmount()}
        </div>
        </>
    )
}