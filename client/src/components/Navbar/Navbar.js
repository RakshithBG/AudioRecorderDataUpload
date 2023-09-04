 import React, { useState,useEffect } from 'react';
 import {AppBar,Typography,ToolBar,Button} from '@material-ui/core ';
 import useStyles from './styles';
 import {Link} from 'react-router-dom'
import { Avatar, Button, Container, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-redux';
import{useLocation} from 'react-redux';

 
 const Navbar = () => {
    const classes=useStyles();
    
    const{user,setUser}=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();


    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.pushState('/')
        setUser(null);


    }
    useEffect(()=>{
        const token=user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')))

    },[location])
   return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={link} to='/'className={classes.heading} variant="h2" align="center">Video And Audio Recorder</Typography> 

        </div>
        <Toolbar className={classes.toolbar}>
            {user ?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt[0]}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant={Contained} className={classes.logout} color='secondary' onClick={logout}>Logout</Button>

                </div>

            ):(
                <Button component={Link} to='/auth' variant='contained' >Sign In</Button>
                 
            )

            }
             
        </Toolbar>
        
        
      </AppBar>
   )
 }
 
 export default Navbar