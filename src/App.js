import './App.css';
import Row from "./Row"
import Requests from "./Request"
import Banner from "./Banner"
import NavBar from "./Navbar"

function App() {
  //c4cf7ce9d694fc59b4e31498cf384355

  return (
    <div className="App">
      <NavBar />
      <Banner />
        <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} /> 
        <Row title="Trending Now" fetchUrl={Requests.fetchTrending} largeRow={true} />
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
