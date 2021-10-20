const MovieCard = ({imgUrl,name,rate,description}) =>
<div className='card'>
    <div className='imgBlock'>
        <img src={imgUrl} alt={name} className='imgCard'/>
    </div>
    <div className='infoBlock'>
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>Note {rate}/5</h3>
    </div>
</div>
export default MovieCard;
MovieCard.defaultProps = {
    imgUrl: "",
    name:'',
    rate:0,
    description:''
};