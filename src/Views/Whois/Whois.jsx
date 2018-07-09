import React from 'react';
import {Grid, GridList, GridListTile, GridListTileBar, Divider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const Whois = (prop) => {
    return (
        <div style={{textAlign: 'center', backgroundColor: '#424141'}}>
        <Grid container style={{width: "80%", margin: "0px auto", padding: "75px 0px"}}>
        <Grid item xs='12'>
        HELLO?
        </Grid>
        <Grid item xs={12}>
            <img src='http://via.placeholder.com/300x350' alt=''/>
        </Grid>
        <Grid item xs={12}>
            <Typography>
                HELLO My name is Daniel a Full Stack web developer with a spirit to always improve on what is already there. Whether it be functionality or aesthetics. I have more fun working on front-end however am welcome to any challenge. 
I love to code, design, cook, game and golf.
            </Typography>
        </Grid>

      

        </Grid>
        </div>
    )
}

export default Whois;