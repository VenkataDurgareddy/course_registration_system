import Person from "./person";
function Persondetails(){
    let details=[
        {
            name:'XYZ',
            roll:'1'
        },
        {
            name:'YZX',
            roll:'2'
        }
    ]
    let list=[
        {
            name:'li',
            roll:'2'
        },
        {
            name:'li2',
            roll:'3'
        }
    ]
    return(
            // <table border={1} align="center">
            // <tr>
            //     <th>Name</th>
            //     <th>rollno</th>
            // </tr>
            // {
            //     details.map((ele)=>{
            //         return(<Person name={ele.name} roll={ele.roll}/>)
            //     })
            // }
            // </table>
            <ul align="center">
                {
                    list.map((ele)=>{
                        return(<Person name={ele.name} roll={ele.roll}/>)

                    })
                }
            </ul>
    )
}
export default Persondetails;