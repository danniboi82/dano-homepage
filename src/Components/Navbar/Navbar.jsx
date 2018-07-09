import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Face from '@material-ui/icons/Face';
import Code from '@material-ui/icons/Code';
import Portfolio from '@material-ui/icons/DeveloperBoard';
import HMHY from '@material-ui/icons/LiveHelp';

const styles = {
  root: {
    flexGrow: 1
  }
};

const Navbar = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar
          style={{
          width: '80%',
          margin: '0px auto',
          textAlign: 'default'
        }}>
          <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
            <img
              src='/images/Official_DanO_logo.svg'
              alt=''
              style={{
              width: '150px',
              height: 'auto'
            }}/>
          </Typography>
          <div className="Menu-Wrapper">
            <Button>
              <Face style={{
                marginRight: '5px'
              }}/>
              WHOIS?
            </Button>
            <Button>
              <Code style={{
                marginRight: '5px'
              }}/>
              Skill Sets
            </Button>
            <Button>
              <Portfolio style={{
                marginRight: '5px'
              }}/>
              Past Experience
            </Button>
            <Button>
              <HMHY style={{
                marginRight: '5px'
              }}/>
              Help me Help YOU!
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);