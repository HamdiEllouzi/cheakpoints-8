import MovieList from './components/MovieList'
import { BrowserRouter as Router} from "react-router-dom";

export const App = () => {
    return(
        <Router>
            <MovieList />
        </Router>
    )
}