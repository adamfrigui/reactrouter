
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import DescTrailer from './components/DescTrailer'
import AddMovie from  './components/AddMovie';
import {useState} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [movies, setMovies] = useState([
    {
                "Title": "Spider-Man: Homecoming",
                "Trailer" : "n9DwoQ7HWvI",
                "Description" : "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man and finds himself on the trail of a new menace prowling the skies of New York City. A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man",
                "Year": "2017",
                "id" : 1,
                "imdbID": "tt2250912",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man 3",
                "Trailer" : "wPosLpgMtTY",
                "Description" :" A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge. A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
                "Year": "2007",
                "id" : 2,
                "imdbID": "tt0413300",
                "vote_average" : "5",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
            },
            {
                "Title": "The Amazing Spider-Man 2",
                "Trailer" : "nbp3Ra3Yp74",
                "Description" :"Fighting crime and protecting New York City is a dangerous, full-time job, and Peter Parker, two years after his battle with the mega-criminal, Lizard, in The Amazing Spider-Man (2012), finds himself bound by his promise to Stacy's late father.",
                "Year": "2014",
                "id" : "the-amazing-spider-man-2",
                "imdbID": "tt1872181",
                "vote_average" : "3",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man: Into the Spider-Verse",
                "Trailer" : "g4Hbz2jLxvQ",
                "Description" :"Spider-Man: Into the Spider-Verse is a computer-generated animated film created by Sony Pictures Animation, which follows Peter Parker in another universe who trains Miles Morales as the new Spider-Man and teams with other Spider-Men from other universes to save theirs from The Kingpin",
                "Year": "2018",
                "id" : "spider-man-into-the-spider-verse",
                "imdbID": "tt4633694",
                "Type": "movie",
                "vote_average" : "2",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
            },
            {
                "Title": "Spider-Man: Far from Home",
                "Trailer" : "Nt9L1jCKGnE",
                "Description" :"Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever. Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation.",
                "Year": "2019",
                "id" : "spider-man-far-from-home",
                "imdbID": "tt6320628",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            },
             {
                "Title": "Star Wars",
                "Trailer" : "L-_xHEv0l-w",
                "Description" :"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
                "Year": "1977",
                "id" : "star-wars",
                "imdbID": "tt0076759",
                "Type": "movie",
                "vote_average" : "1",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode V - The Empire Strikes Back",
                "Trailer" : "JNwNXF9Y6kY",
                "Description" :"Set three years after the events of Star Wars, it follows the battle between the malevolent Galactic Empire, led by the Emperor, and the Rebel Alliance led by Princess Leia. Meanwhile, Luke Skywalker trains to master the Force so he can confront the powerful Sith lord, Darth Vader",
                "Year": "1980",
                "id" : "star-wars-the-empire-strikes-back",
                "imdbID": "tt0080684",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VI - Return of the Jedi",
                "Trailer" : "7L8p7_SLzvU",
                "Description" :"After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star",
                "Year": "1983",
                "id" : "star-wars-return-of-the-jedi",
                "imdbID": "tt0086190",
                "Type": "movie",
                "vote_average" : "2",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Star Wars: Episode VII - The Force Awakens",
                "Trailer" : "sGbxmsDFVnE",
                "Description" :"Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.",
                "Year": "2015",
                "id" : "star-wars-the-force-awakens",
                "imdbID": "tt2488496",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
            },
             {
                "Title": "Wonder Woman",
                "Trailer" : "1Q8fG0TtVAY",
                "Description" :"In Wonder Woman, the Amazon princess Diana sets out to stop World War I, believing the conflict was started by the longtime enemy of the Amazons, Ares, after American pilot and spy Steve Trevor crash-lands on their island Themyscira and informs her about it.",
                "Year": "2017",
                "id" : "wonder-woman",
                "imdbID": "tt0451279",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
            },
            {
                "Title": "Wonder Woman 1984",
                "Trailer" : "XW2E2Fnh52w",
                "Description" :"Set in 1984 during the Cold War, the film follows Diana and her past love Steve Trevor as they face off against Max Lord and Cheetah. Discussion of a sequel began shortly after the release of the first film in June 2017 and the decision to proceed was confirmed the following month",
                "Year": "2020",
                "id" : "wonder-woman-1984",
                "imdbID": "tt7126948",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYTlhNzJjYzYtNGU3My00ZDI5LTgzZDUtYzllYjU1ZmU0YTgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg"
            },
            {
                "Title": "The Shawshank Redemption",
                "Trailer" : "NmzuHjWmXOc",
                "Description" :" the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.",
                "Year": "1994",
                "id" : "the-shawshank-redemption",
                "imdbID": "tt0111161",
                "Type": "movie",
                "vote_average" : "5",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
                "Title": "Infinite",
                "Trailer" : "_WWEOCQGxSw",
                "Description" :"A man discovers that his hallucinations are actually visions from past lives. A man discovers that his hallucinations are actually visions from past lives. A man discovers that his hallucinations are actually visions from past lives.",
                "Year": "2021",
                "id" : "infinite",
                "imdbID": "tt6654210",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZTU5MmY0ZjctYTNlOS00MDIyLWJkZTAtNzBiOTkyNWI5MGY2XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"
            },
            {
                "Title": "Black Widow",
                "Trailer" : "ybji16u608U",
                "Description" :"Like her namesake arachnid, Romanoff is stealthy, precise, and absolutely lethal. She is the Black Widow. Black Widow is a deadly one-woman fighting force. An expert in many forms of martial arts, she is also a skilled gymnast and possesses superhuman strength, speed, agility, and endurance.",
                "Year": "2021",
                "id" : "black-widow",
                "imdbID": "tt3480822",
                "Type": "movie",
                "vote_average" : "4",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Free Guy",
                "Trailer" : "X2m-08cOAbc",
                "Description" :"a bank teller who discovers he is actually a background player in an open-world video game, decides to become the hero of his own story... one he rewrites himself. Now in a world where there are no limits, he is determined to be the guy who saves his world his way... before it is too late.",
                "Year": "2021",
                "id" : "free-guy",
                "imdbID": "tt6264654",
                "Type": "movie",
                "vote_average" : "3",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            }])
  const [rating, setRating] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [showList, setShowList] = useState(true)

  const addNewMovie = (movie) => {
      setMovies([...movies, movie])
  }
  const handleRating  = (num_stars) => {
    setRating(num_stars)
  }
  const handleKeyword = string =>{
    setKeyword (string)
  }
  
  return (
    <BrowserRouter>
        <div className="App">
            <Route exact path='/' render={props => <Home
            handleRating={handleRating}
            rating={rating}
            handleKeyword={handleKeyword}
            setShowList={setShowList}
            movies={movies}
            keyword={keyword}
            {...props}
            />} />  
            {/* {showList ?
        <> */}
        
         <Route path="/description/:id">
         <DescTrailer movies={movies}/>
         </Route>

        {/* </> : <AddMovie addNewMovie={addNewMovie} setShowList={setShowList}/>}
        </Route> */}
      
        </div>
    </BrowserRouter>
  );
}

export default App;
