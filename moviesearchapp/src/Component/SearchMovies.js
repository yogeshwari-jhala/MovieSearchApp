import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, TextField} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      minWidth: '20%',
      margin: '10%',
      padding : '10%',
    },
    form :{
        display: 'flex',
        flexDirection : 'row',
        margin: 'auto',
    },
    txt : {
        margin: 'auto',
        width : '50%',
    },
    btn : {
        margin: 'auto',
        width: '30%',
        padding: '2%'
    }
});
export default function SearchMovies(){
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=23159b68b81a36a242cb055a7d8e658d&query=${query}`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }
        catch(err){
            console.error(err);
        }
    }
    return (
        <>
        <Card className={classes.root}>
            <form className={classes.form} onSubmit={searchMovies}>
            <TextField 
            id="filled-basic" 
            label="Movie Name" 
            variant="filled"  
            htmlFor="query"
            name="query"
            placeholder="Like - Jurassic Park"
            className={classes.txt}
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="contained" color="secondary" type="submit" className={classes.btn}>
                     Search
            </Button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>    
        </Card>
        </>
    )
}