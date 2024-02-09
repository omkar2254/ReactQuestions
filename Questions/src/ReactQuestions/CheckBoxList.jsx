import { useState } from 'react';
export default function CheckBoxList(){
    const [selectedOption, setSelectedOption] = useState([])
    const handleCheckBoxChange = (option)=>{
        if(selectedOption.includes(option)){
            setSelectedOption(selectedOption.filter((selectedOne)=> selectedOne !== option))
        }else{
            setSelectedOption(...selectedOption, option);
        }
    }
    return(
        <>
        <div>
            {
                ['OptionA', 'OptionB', 'OptionC'].map((option)=>{
                    <label key={option}>
                        <input type="checkbox"
                        checked={selectedOption.includes(option)}
                        onChange={()=> handleCheckBoxChange(option)}
                         />
                    </label>
                })
            }
            <p>Selected Options: {selectedOption.join(', ')}</p>
        </div>
        </>
    )
}