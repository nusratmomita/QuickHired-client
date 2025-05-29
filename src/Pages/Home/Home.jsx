import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TopJobs from '../../Components/TopJobs/TopJobs';


const topJobsPromise = fetch('http://localhost:8000/jobs').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopJobs topJobsPromise={topJobsPromise}></TopJobs>
        </div>
    );
};

export default Home;