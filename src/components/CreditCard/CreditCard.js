import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import Master from '../../assets/images/mc_symbol_opt_73_2x.png'

function CreditCard(props){
    let divStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    let NArray= (props.number).split('')
    let ccConvert=NArray.map((element,index)=>{if(index<12){return element="•"}else{ return element=element}})
    let ccNumbers = ccConvert[0]
    for(let i=1;i<ccConvert.length;i++){if(i%4===0){ccNumbers+=" "; ccNumbers+=ccConvert[i]} else {ccNumbers+=ccConvert[i]}}
    

    let type = props.type=="Visa" ? Visa : Master; 
return <div style={divStyle} className="creditCard">
<div className='ccLogo'> <img src={type} alt={props.type} /> </div>
<div className='ccNumber'><p>{ccNumbers}</p></div>
<div className='ccExpiration'><span>{`Expires ${props.expirationMonth}/${props.expirationYear}`}</span><span>{`${props.bank}`}</span></div>
<div className='ccOwner'><span>{props.owner}</span></div>
</div>
}

export default CreditCard