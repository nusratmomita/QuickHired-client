import React from 'react';
import { GrPin } from "react-icons/gr";
import { Link } from 'react-router';


const TopJobCard = ({job}) => {
    // console.log(job)

    return (
        <div className="card bg-base-100 w-110 shadow-sm">
            <div className='flex items-center'>
                <figure className="px-10 pt-10">
                    <img
                    src={job.company_logo}
                    alt="Shoes"
                    className="rounded-2xl bg-green-200 w-[100px]" />
                </figure>
                <div>
                    <h1 className='text-3xl font-bold text-[#328E6E] text-left'>{job.company}</h1>
                    <h2 className='mt-3 flex justify-center whitespace-nowrap items-center gap-2 text-lg font-bold'><GrPin color='green' size={25}></GrPin> {job.location}</h2>
                </div>

            </div>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{job.title}</h2>
                <p className=' text-lg text-left font-semibold'>{job.description}</p>
                <h1 className='bg-green-200 rounded-2xl text-green-900 text-xl font-bold p-3 w-[130px] mb-5 border-2 border-green-800'>{job.jobType}</h1>
                <div className="card-actions">
                    <Link to={`/job/${job._id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopJobCard;