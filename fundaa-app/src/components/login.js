import React from 'react'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const Login =()=> {

    const paperstyle = {padding:20 , height: '70vh',width: 280 , margin: "20px auto" }
    const avatarstyle = {backgroundColor : '#3f51b5'}
    const gap = {margin: '8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}><AccountCircleRoundedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
                <TextField style={gap} label='Password' placeholder='Enter Password' type='password' fullWidth required></TextField>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={gap} fullWidth>Sign in</Button>
                <Typography style={gap}>
                    <Link href='#'>
                        Forgot Password?
                    </Link>
                </Typography>
                <Typography> Do you have an account? 
                    <Link href='#'>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )
}
export default Login