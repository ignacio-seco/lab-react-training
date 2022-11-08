import "./IdCard.css"

function IdCard(props){
    return <div className="IdCardDiv">
    <div className="photoDiv">
    <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} className="pictureCard"/>
    </div>
    <div className="informationCard">
    <p>
    <span>First name: </span>{props.firstName}<br/>
    <span>Last name: </span>{props.lastName}<br/>
    <span>Gender: </span>{props.gender}<br/>
    <span>Height: </span>{`${Number(props.height)/100} m`}<br/>
    <span>Birth: </span>{`${new Date(props.birth).toDateString()}`}<br/>
    </p>
    </div>

    </div>

}
export default IdCard