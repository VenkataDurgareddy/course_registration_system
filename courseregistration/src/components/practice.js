// import Practice2 from "./practice2"
function Practice(){
    let name=[{
        name:'Durga',
        roll:'123'
    },
    {
        name:'Reddy',
        roll:'234'
    }
]
return(
    <>
    {
        name.map((ele)=>{
           return(<p>{ele.name}{ele.roll}</p>)
        })
    }
    </>
)
}
export default Practice;