import React from 'react';
import {Grid, GridList, GridListTile, GridListTileBar, Divider} from '@material-ui/core';
import reactLogo from './Logos/logo.svg';
import bootstrapLogo from './Logos/bootstrap-icon.svg';
import ejsLogo from './Logos/EJS.png'
import ES6 from './Logos/es6.png';
import expressJsLogo from './Logos/expressjslogo.png';
import handlebars from './Logos/handlebars.svg';
import htmlLogo from './Logos/html.svg';
import cssLogo from './Logos/css.svg';
import materialUiLogo from './Logos/material-ui.svg';
import mongoDBLogo from './Logos/mongoDB.png';
import mySqlLogo from './Logos/mysql-5.svg';
import nodejsLogo from './Logos/nodejs.svg';
import reactNatLogo from './Logos/reactnativelogo.png';
import semanticLogo from './Logos/semantic_UI.png';
import sequelizeLogo from './Logos/sequelize.svg';

const Skills = (props) => {
    return (
        <div
            style={{
            width: '80%',
            margin: '0px auto',
            textAlign: 'center'
        }}>
            <h1>Here are some things I know how to use and have worked with</h1>
            <h2>I'm curious if this git push will work</h2>
            <Grid
                container
                spacing={24}
                style={{
                height: '100px'
            }}>
                <Grid item xs={6} lg={3}>
                    <img
                        style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                        src={reactLogo}
                        alt=""/>
                </Grid>
                <Grid item  xs={6} lg={3}>
                    <img
                        style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                        src={bootstrapLogo}
                        alt=""/>
                </Grid>
                <Grid item  xs={6} lg={3}>
                    <img
                        style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                        src={ejsLogo}
                        alt=""/>
                </Grid>
                <Grid item  xs={6} lg={3}>
                    <img
                        style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                        src={ES6}
                        alt=""/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills;