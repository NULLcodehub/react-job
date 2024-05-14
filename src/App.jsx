import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HomeCard from './components/HomeCards/HomeCard';
import JobListing from './JobListing/JobListing';
function App() {
  return (
    <>
     <Navbar/>
     <Hero title='Search for React jobs' subtitle='Get your dream React job'/>
     <HomeCard/>
     <JobListing/>
    </>
  );
}

export default App
