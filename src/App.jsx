// import { Sticker } from './Components/Stickers/Sticker';
import { StickerList } from './Components/Stickers/StickersList';
// import { Choice } from './Components/Stickers/Choice';
import { Component } from 'react';
import stickerData from "./stickers.json"
import './App.css';


export class App extends Component{
render(){
  return (
    <>
     {/* <Choice label={this.state.label}/> */}
     <StickerList  stickerData={stickerData}/>
    </>
  )};
}

export default App;
