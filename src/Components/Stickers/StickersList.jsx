import {Sticker} from "./Sticker"
import { UlList } from "./Sticker.styled"
import { Component } from 'react';
import stickerData from '../../stickers.json'



export class StickerList extends Component{

    
state = {
    label:''
  }

  handleChange=(newLabel)=>{

    if(this.state.label === newLabel){
        return
    }
    console.log(newLabel)
    this.setState({
      label: newLabel
    })
  }

    render(){
    return(
        <UlList>
       {stickerData.map(({img,label})=>{
        return(
            <Sticker
            key={label}
             img={img}
             label={label}
             handleChange={this.handleChange}
            />
        )
       })}
        </UlList>
    )}
}