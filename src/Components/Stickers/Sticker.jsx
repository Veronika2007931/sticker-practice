import {List} from "./Sticker.styled"


export function Sticker({img, label, handleChange}){
    return(
       <List onClick={()=><p>{handleChange(label)}</p>}>
        <img src={img} alt="" />
        
        <p>{label}</p>
       </List>
    )
}