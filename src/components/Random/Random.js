import './Random.css'

function Random(props){
    function randomNumber(min, max)
    { 
        min = Math.ceil(min) 
        max=Math.floor(max)
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    return <div className='randomDiv'>
        <span>{`Random value between ${props.min} and ${props.max} => ${randomNumber(Number(props.min),Number(props.max))}`}</span>
    </div>
}
export default Random