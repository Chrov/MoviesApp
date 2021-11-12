import About from "../components/about";
import { MoviesGrid } from "../components/moviesGrid";
import Search from "../components/Search";

export function LandingPage(){
    return <div>
        <About />
        <Search />
        <MoviesGrid />;
        </div> 
}