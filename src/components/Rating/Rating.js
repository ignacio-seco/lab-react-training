import './Rating.css'

function Rating(props){
    let value=Math.round(Number(props.children))
    let stars=""
    for(let i=0;i<5;i++){if(i<value){stars+="★"} else {stars+="☆"}}

    return <div className='ratingDiv'>
        <span>{stars}</span>
    </div>
}

export default Rating