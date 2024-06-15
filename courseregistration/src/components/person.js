function Person(props){
    return(
        //displaying the table 
        // <tr>
        //     <td>{props.name}</td>
        //     <td>{props.roll}</td>
        // </tr>
        //displaying the list 
        <li>
            {props.name}
            {props.roll}
        </li>
    )
}
export default Person;