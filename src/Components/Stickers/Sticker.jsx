import {List} from "./Sticker.styled"


export function Sticker({img, label, handleChange}){
    return(
       <List onClick={()=>{handleChange(label)}}>
       
        <img src={img} alt="" />
        <p>{label}</p>
       </List>
    )
}