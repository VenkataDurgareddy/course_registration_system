import React from "react";
class Classcomp1 extends React.Component{
    render(){
        let a=1;
        let name="Durga"
        return(
            <div>
                <h1>This is class component{a}</h1>
                <h1>My name is{name}</h1>
            </div>
        )
    }
}
export default Classcomp1;