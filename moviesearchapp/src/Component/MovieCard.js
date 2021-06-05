import React from "react";
import {FormHelperText, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5%'
    },
    image : {
        margin: '10%',
        height: '30%',
        width: '30%',
        borderRadius: '10px',
    },
    content : {
        margin: '1%',
        padding: '5%',
    },
    title: {
        fontSize: '190%'
    },
    overview: {
        padding: '2%',
        textAlign: 'justify',
        fontSize: '120%',
        textShadow: '0 0 black'
    }
  }));
  
export default function MovieCard({movie}){
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            <img className={classes.image}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
                <hr/>
            <div className={classes.content}>
            <h3 className={classes.title}>{movie.title}</h3>
            <p><strong>RELEASE DATE: {movie.release_date}</strong></p>
            <p><strong>RATING: {movie.vote_average}</strong></p>
            <p className={classes.overview}>{movie.overview}</p>
            </div>

        </Paper>
    )
}