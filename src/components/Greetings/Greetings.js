import './Greetings.css'

function Greetings(props){
    let greetText={
        de:`Hallo`,
        fr:`Bonjour`,
        en:`Hello`,
        es:`Hola`,
        pt:`Qual é a boia, jiboia?`
    }

 return <h1 className='greetingBox'>{`${greetText[props.lang]} ${props.children}`}</h1>
}

export default Greetings