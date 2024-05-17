import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HomeCard from './components/HomeCards/HomeCard';
import JobListing from './JobListing/JobListing';
import ViewAll from './ViewAllJobs/ViewAll';
function App() {
  return (
    <>
     <Navbar/>
     <Hero title='Search for React jobs' subtitle='Get your dream React job'/>
     <HomeCard/>
     <JobListing/>
     <ViewAll/>
    </>
  );
}

export default App
