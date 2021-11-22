import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import styled from 'styled-components'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login'
import Signup from '../components/signup' 
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
    margin-top : 30px;
    border: 1px solid #000;
    background-image: url(https://i.ibb.co/BjPTH2L/books3.jpg);
`

const SignInOutContainer = () => { 

    const [value,setValue]=useState(0)
    const paperStyle={width:340, margin:"20px auto"}
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }

    return(
        <div>
        <Announcements/>
        <Navbar/>
        <Container>
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      </Paper>
      </Container>
      <Footer/>
      </div>
    )
}

export default SignInOutContainer