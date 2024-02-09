
const userData = [
    {id: 1, name: 'DJ'},
    {id: 2, name: 'PJ'},
    {id: 3, name: 'AJ'}
]
export default function Check(){
    return(
        <>
        {
            userData.map((item)=>{
                <input type="checkbox"
                name="userData"
                value={item.name}
                id={item.id}
                onChange={handleData}/>
            })
        }
        </>
    )
}