import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import config from '../../config.js';
import { Trans } from "react-i18next";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        <Link to="/" className="logo"><Trans>Read the music</Trans></Link>
      </Typography>
      <Link to="/changelog" className="changelog">
        <Chip color="secondary" label={"Version " + config.version} className="changelog__chip"/>
      </Link>
    </Toolbar>
  </AppBar>
)

export default Header;