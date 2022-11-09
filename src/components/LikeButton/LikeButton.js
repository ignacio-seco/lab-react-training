import { useState } from 'react';
import './LikeButton.css';


function LikeButton(){
    let colorArray=['purple','blue','green','yellow','orange','red']
    let [counter,setCounter]=useState(0)
    let [bgColor,setBgColor]=useState(5)
    function likeCount(){setCounter(counter+1)}
    function colorChange(){setBgColor(counter%colorArray.length)}
    function actualize(){
        likeCount();
        colorChange();
    }
    let buttonStyle={
        backgroundColor:colorArray[bgColor]
    }

    return <div>
        <button className='likeButton' style={buttonStyle} onClick={actualize}> {`${counter} Likes`} </button>
    </div>
}
export default LikeButton