import React from "react";
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
    return (
        <Card className={classes.root}>
            <form className={classes.form}>
            <TextField 
            id="filled-basic" 
            label="Movie Name" 
            variant="filled"  
            htmlFor="query"
            name="query"
            placeholder="Like - Jurassic Park"
            className={classes.txt}
            />
            <Button variant="contained" color="secondary" type="submit" className={classes.btn}>
                     Search
            </Button>
            </form>
        </Card>
    )
}