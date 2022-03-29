import { LastName } from "./lastName"
import { FirstName } from "./firstName"
import { Gender } from "./gender"
import { Height } from "./height"
import { Picture } from "./picture"

export function IdCard(props){
    return(<div className = "IdCard">
      <LastName lastName={props.lastName}/>
      <FirstName firstName={props.firstName}/>
      <Gender gender={props.gender}/>
      <Height height= {props.height}/>
      <Picture picture={props.picture}/>  
    </div>)
}