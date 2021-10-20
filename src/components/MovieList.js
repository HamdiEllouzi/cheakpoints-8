import { useState } from 'react';
import Candyman from '../movieCover/Candyman.jpg'
import Tralala from '../movieCover/Affiche_Tralala.jpg'
import './style.css'
import Filter from './Filter';
import { Route,Switch ,useLocation} from "react-router-dom";
import { MovieInfo } from './MovieInfo';
const MovieList = () =>{
    const [movieList,setMovieList] = useState([
        {
          titile:'Eiffel',
          description:'Drame, Biopic, Comédie ',
          synopsis:'Venant tout juste de terminer sa collaboration sur la Statue de la Liberté, Gustave Eiffel est au sommet de sa carrière. Le gouvernement français veut qu’il crée quelque chose de spectaculaire pour l’Exposition Universelle de 1889 à Paris, mais Eiffel ne s’intéresse qu’au projet de métropolitain. Tout bascule lorsqu il recroise son amour de jeunesse. Leur relation interdite l’inspire à changer l’horizon de Paris pour toujours. ',
          posterURL:'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-06/eiffel.jpg',
          videoEmb:'STXwmr01J0o',
          rating:'3'
        },
        {
          titile:'Tralala',
          description:'Comédie musicale',
          synopsis:'Tralala, la quarantaine, chanteur dans les rues de Paris, croise un soir une jeune femme qui lui adresse un seul message avant de disparaitre : "Surtout ne soyez pas vous-même". Tralala a t-il rêvé ? Il quitte la capitale et finit par retrouver à Lourdes celle dont il est déjà amoureux. Elle ne se souvient plus de lui. Mais une émouvante sexagénaire croit reconnaître en Tralala son propre fils, Pat, disparu vingt ans avant aux Etats-Unis. Tralala décide d’endosser le "rôle". Il va se découvrir une nouvelle famille et trouver le génie qu’il n’a jamais eu. ',
          posterURL:Tralala,
          videoEmb:'9ccJqTo4VKA',
          rating:'2'
        },
        {
          titile:'Candyman',
          description:'Epouvante-horreur',
          synopsis:'D’aussi loin qu’ils s’en souviennent, les habitants de Cabrini Green, une des cités les plus insalubres en plein cœur de Chicago, ont toujours été terrorisés par une effroyable histoire de fantôme, passant de bouche à oreille, où il est question d’un tueur tout droit sorti de l’enfer, avec un crochet en guise de main, qui pourrait apparemment être convoqué très facilement par qui l’oserait, rien qu’en répétant son nom 5 fois devant un miroir.',
          posterURL:Candyman,
          videoEmb:'TPBH3XO8YEU',
          rating:'1'
        }
    ])
    const [movieName , setMovieName] = useState('')
    const [movieDescr , setMovieDescr] = useState('')
    const [movieRate , setMovieRate] = useState('')
    const [movieUrl , setMovieUrl] = useState('')
    const [searchName , setSearchName] = useState('')
    const [searchRate , setSearchRate] = useState('')
    const addMove = (name,description,rate,url) => {
        const addMovie = {
            titile: name,
            description:description,
            posterURL:url,
            rating:rate
        }
        setMovieList(movieList =>[...movieList , addMovie])
        setMovieName('')
        setMovieDescr('')
        setMovieRate('')
        setMovieUrl('')
    }
    const location = useLocation();
    const search= () => ((location.pathname ==='/')&&
    <div className='searchBlock'>
        <input type='text' onChange={e =>setSearchName(e.target.value)} placeholder="search by name" />
        <input type='text' onChange={e =>setSearchRate(e.target.value)/6} placeholder="search by rate" />
    </div>)
  const addFilme =() =>((location.pathname ==='/')&&
      <div className='addBlock'>
      <input type='text' value={movieName} onChange={e =>setMovieName(e.target.value)} className='' placeholder='Movie Name'/>
      <input type='text' value={movieUrl} onChange={e =>setMovieUrl(e.target.value)} className='' placeholder='Movie cover URL'/>
      <input type='text' value={movieDescr} onChange={e =>setMovieDescr(e.target.value)} className='' placeholder='Movie description'/>
      <input type='text' value={movieRate} onChange={e =>setMovieRate(e.target.value)} className='' placeholder='Movie rating'/>
    </div>)
  const addButton =() =>((location.pathname ==='/') &&
      <div>
        <button onClick={()=>addMove(movieName,movieDescr,movieRate,movieUrl)}>Add Movie</button>
      </div>)
  search()
    return (
        <div className="App">
          {search()}
          <div className='cardBlock'>
            <Switch>
                <Route path='/:name' render={(props)=><MovieInfo filmeListe={movieList} {...props}/>}/>
                <Route to='/' render={(props)=><Filter filmeListe={movieList} title={searchName} rate={searchRate}/>}/>
            </Switch> 
          </div> 
          {addFilme()}
          {addButton()}
        </div>
    );
}
export default MovieList