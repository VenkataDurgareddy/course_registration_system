import { useState } from "react";
import bulboff from './bulboff.jpg'
import bulbon from './bulbon.png'
function Hooks(){
    const [cnt,setcnt]=useState(0)
    const [light,wiring]=useState(false)
    const a=()=>{
        alert("Hi")
    }
    return(
        <div>
            <h1>React hooks</h1>
            <h1>{cnt}</h1>
            {/* <button onClick={()=>setcnt(cnt+1)}>Increment</button> */}
            <button onClick={()=>setcnt(cnt-1)}>Decrement</button>
            <h1>Bulb</h1>
            <button onclick={()=>wiring(true)}>on</button>
            <button onClick={()=>wiring(false)}>off</button>
            <br/>
            {
            light===false ?<img src={bulboff} style={{height:"300px",width:"400px"}}/>:<img src={bulbon} alt='img'/>
            }
            <button onClick={a}>click</button>
        </div>
    )
}
export default Hooks;