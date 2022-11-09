import './ClickablePicture.css'
import {useState} from 'react'

function ClickablePicture(props){
    let image = [props.img,props.imgClicked]
    
    const [picture,setPicture]=useState(0)
    function changePicture(){ 
        picture===0 ? setPicture(1):setPicture(0); 
    }
return <div className='changePicture'>
    <img src={image[picture]} onClick={changePicture} alt="user"/>
</div>
}
export default ClickablePicture