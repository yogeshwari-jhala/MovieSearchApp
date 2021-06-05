import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Card, TextField} from "@material-ui/core";
import MovieCard from './MovieCard';

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
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>        
        </Card>
        </>
    )
}