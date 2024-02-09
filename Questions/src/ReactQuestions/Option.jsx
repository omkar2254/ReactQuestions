//Select option
import { useState } from 'react';
export default function Option(){

    const [selectedOption, setSelectedOption] = useState(null)
    function handleChange(e){
        setSelectedOption(e.target.value);
        console.log("Selected Option: ", e.target.value);
    }
    return(
        <>
        <select value={selectedOption} onChange={handleChange}>
            <option value="Option1">A</option>
            <option value="Option2">B</option>
            <option value="Option3">C</option>
        </select>
        </>
    )
}