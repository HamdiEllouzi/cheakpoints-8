 import './MovieInfo.css'
 import { useHistory } from 'react-router'
 export const MovieInfo = ({filmeListe,match}) => {
    const filme = filmeListe.find(v => v.titile === match.params.name)
    let history = useHistory();
    return(
    <div className="wrapper">
        <div style={{position:'absolute'}}>
        <button onClick={() => history.goBack()}>Back</button>
        </div>
	    <div className="main_card">
            <div className="card_left">
                <div className="card_datails">
                    <h1>{filme.titile}</h1>
                    <div className="card_cat">
                        <p className="genre">{filme.description} </p>
                    </div>
                    <p className="disc">{filme.synopsis}</p>
                </div>
            </div>
		    <div className="card_right">
			    <div className="img_container">
				    <img src={filme.posterURL} alt="" />
			    </div>
		    </div>
		</div>
        <div className="video-card">
            <div className="video-responsive">
                <iframe src= {`https://www.youtube.com/embed/${filme.videoEmb}`}
                    title="YouTube video player"
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
	</div>
    )
}
MovieInfo.defaultProps = {
    filmeListe:{
        titile:'',
        description:'',
        synopsis:'',
        posterURL:'',
        videoEmb:'',
        rating:''
    }
}