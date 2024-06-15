
function Event(){
    const a=()=>{
        alert("onClick event")
    }
    //passing arguments in the function event
    const b=(arg)=>{
        alert(arg)
    }
    const Input=(e)=>{
        console.log(e.target.value)
    }
    return(
        <div>
            <button onClick={a}>Click</button>
            {/* passing arguments */}
            <button onMouseOver={()=>b("onClick passing arg")}>Click 2</button>
            {/* Input field */}
            <input type="text" name="fname" onChange={Input}></input>
        </div>
    )
}
export default Event;