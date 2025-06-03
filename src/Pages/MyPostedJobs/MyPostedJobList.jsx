import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedJobList = ({MyPostedJobsPromise}) => {
    const jobs = use(MyPostedJobsPromise);
    console.log(jobs)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Job Type</th>
                    <th>Deadline</th>
                    <th>View Applications</th>
                </tr>
                </thead>
                <tbody>
                {
                    jobs.map((job,index) => 
                         <tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            <td>{job.jobType}</td>
                            <td>{job.applicationDeadline}</td>
                            <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                        </tr>
                    )
                }
               
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedJobList;