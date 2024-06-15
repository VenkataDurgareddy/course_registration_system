import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <Link to="./compA">compA</Link>||
            <Link to="./persondetails">Person details</Link>
        </div>
    )
}
export default Menu;