import React,{useState} from 'react';
import { Avatar,Button,Paper,Grid,Typography,Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/core/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { useState } from 'react';
import {GoogleLogin} from 'react-google-login';
import Icon from'./icon';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

const Auth = () => {
    const classes=useStyles();
    const[showPassword,setShowPAssword]=useState(false);
    const[isSignUp,setIsSignup]=useState(false);
    const dispatch=useDispatch();
    const history=useHistory();
    
    const handleShowPassword=()=>setShowPAssword(((prevShowPassword)=>!prevShowPassword))
    const handleSubmit=()=>{

    };

    const handleChange=()=>{

    }

    const switchMode=()=>{
        setIsSignup((prevIsSignUp)=>!prevIsSignUp);
        handleShowPassword(false);

    }
    const googleSuccess=async (res)=>{
        const result=res?.profileObj;
        const token=res?.tokenId;
        try{
            dispatch({type:'AUTH',data:{result,token}} )
            history.pushState('/');

        }
        catch(error){

        }

    }
    const googleFailure=()=>{
        console.log("google faliure has failed try again later")
    }

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>

            </Avatar>
            <Typography variant='h5'>{isSignUp? 'Sign Up': 'Sign In '}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                            
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half></Input>
                            <Input name='lastName' label='Last Name' handleChange={handleChange} half></Input>
                            
                            </>
                        )
                    } 
                    <Input name='email' label="Emial Address" handleChange={handleChange} type="email"></Input>\
                    <Input name='password' label="Password"  handleChange={handleChange} type={showPassword?"text":"password" } handleShowPassword={handleShowPassword}></Input>
                    {isSignUp && <Input name='confirmPassword' label="Repeat Password " handleChange={handleChange } type='password'/>}
                    

                </Grid>
                <GoogleLogin
                 clientId='132841742683-ao98ff140ii3t102emj6c9gvub4kfrur.apps.googleusercontent.com'
                 render={(renderProps)=>(
                     <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained'>
                        Google Sign In
                        </Button>

                   
                 )}
                 onSuccess={googleSuccess}
                 onFailure={googleFailure}
                 cookiePolicy="single_host_origin"

                />
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {
                        isSignUp ? 'Sign Up' :'SignIn'
                    }
                </Button>
                <Grid conatiner justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {
                                isSignUp ?'Already have an account SignIn' :"Don't have an account ? Sign up"
                            }
                        </Button>

                    </Grid>

                </Grid>

            </form>

        </Paper>

    </Container>
  )
}

export default Auth