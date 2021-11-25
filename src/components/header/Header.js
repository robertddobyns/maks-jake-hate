import React from 'react';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '50px',
        color: 'red',
        textShadow: '3px 3px 5px #ccc'
    },
}))

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h2'}>Mak's Random Jake Hate Generator</Typography>
        </div>
    )
}

export default Header;