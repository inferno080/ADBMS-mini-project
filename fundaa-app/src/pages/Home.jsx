import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import MidCredits from '../components/MidCredits'


const Home = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <MidCredits/>
            <Categories/>
            <Footer/>
        </div>
    )
}

export default Home

