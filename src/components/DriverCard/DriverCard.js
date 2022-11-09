import "./DriverCard.css"
import Rating from "../Rating/Rating"

function DriverCard(props){
    return <div className="driverCard">
    <div className="driverPhoto">
        <img src={props.img} alt={`${props.name}`}/>
    </div>
    <div className="driverInformation">
        <span className="driverName">{props.name}</span>
        <Rating className="driverRating">{props.rating}</Rating>
        <span className="vehicle">{`${props.car.model} - ${props.car.licensePlate}`}</span>
    </div>

    </div>
}

export default DriverCard