
function BoxColor(props){
let divStyle = {
    backgroundColor: `rgb(${Number(props.r)} ${Number(props.g)} ${Number(props.b)})`,
    width: `62%`,
    height: `100px`,
    borderStyle: `Solid`,
    margin: `0 0 2% 0`
} 

return <div style={divStyle}>
<p className='colorBox'>{`rgb(${props.r},${props.g},${props.b})`}</p>
{/*<p>{`#${Number(props.r).toString(16)}${Number(props.g).toString(16)}${Number(props.b).toString(16)}`}</p>*/}
</div>

}
export default BoxColor