import React, { use } from 'react';
import TopJobCard from '../TopJobCard/TopJobCard';

const TopJobs = ({topJobsPromise}) => {
    const topJobs = use(topJobsPromise);
    console.log(topJobs);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-[#328E6E]">Currently {topJobs.length} Jobs are on TOP</h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-20'>
                {
                    topJobs.map((job) => <TopJobCard key={job._id} job={job}></TopJobCard>)
                }
            </div>
        </div>
    );
};

export default TopJobs;