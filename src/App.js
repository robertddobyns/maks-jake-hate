import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import {CardMedia, Typography,} from "@mui/material";
import { makeStyles} from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
    }
}))

function App() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
        <Typography variant={'h3'}>I hate when Jake Gyllanhal:</Typography>
        <CardMedia
          component={'img'}
          height={'500px'}
          image={'https://picsum.photos/400/300'}
        />
    </div>
  );
}

export default App;
