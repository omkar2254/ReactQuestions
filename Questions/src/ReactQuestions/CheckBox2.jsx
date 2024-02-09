import { useState } from 'react'
const ListData = [
    {id: 1, value: 'javascript'},
    {id: 2, value: 'python'},
    {id: 3, value: 'c'},
    {id: 4, value: 'c++'},
    {id: 5, value: 'java'},
]

function CheckBox2(){
    const [checkedList, setCheckedList] = useState([])

    const handleSelect = (event)=>{
        const value = event.target.value;
        const isChecked = event.target.checked;

        if(isChecked){
            setCheckedList([...checkedList, value]);
        }
        else{
            const filteredList = checkedList.filter((item) => item!=value);
            setCheckedList(filteredList);
        }
    }
    return(
        <>
        <div>Select Programming language</div>
        <div>
            {
                ListData.map((item)=>{
                    return(
                        <>
                        <div key={item.id}>
                        <input type="checkbox" 
                        name="languages"
                        id={item.id}
                        value={item.value}
                        onChange={handleSelect}
                        /></div>
                        <label>{item.value}</label>
                        
                        </>
                    )
                })
            }
        </div>
        <div>
            <p>Your Selected list</p>
            {
                checkedList.map((item, index) => {
                    return(
                        <>
                        <label htmlFor="item">{item}</label>
                        <br />
                        </>
                    )
                })
            }
        </div>

        </>
    )
}

export default CheckBox2;