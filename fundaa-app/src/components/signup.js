import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'

const Signup =()=> {

    const paperstyle = {padding:20, width: 280 , margin: "20px auto" }
    const avatarstyle = {backgroundColor : '#3f51b5'}
    const gap = {margin: '8px 0'}

    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}><AccountCircleRoundedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                
                <Typography variant='caption'>Sign Up and get access to thousands of books!</Typography>
                <Grid align ="left">
                <form>
                <TextField label='Name'  fullWidth required></TextField>
                <TextField label='E-mail' fullWidth required></TextField>
                <FormControl style={gap} component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <TextField label='Contact' fullWidth required></TextField>
                <TextField label='Password' type='password' fullWidth required></TextField>
                <TextField label='Confirm Password' type='password' fullWidth required></TextField>
                <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept terms and conditions"
                />
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign up</Button>
                </form>
                </Grid>
            </Paper>
        </Grid>

    )
}
export default Signup