import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import logo from '../../assets/destino.png';
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles()
    
    return (
        <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} colour="inherit">
                    <img src={logo} alt="Destino Info" height="25px" className={classes.image} />
                    Destino Info
                </Typography>
                <div className={classes.grow} />
                <div className ={classes.button}>
                    <IconButton aria-label="show cart items" colour ="inherit">
                        <Badge badgeContent ={2} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
