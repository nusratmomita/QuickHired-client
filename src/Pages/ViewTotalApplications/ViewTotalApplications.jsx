import axios from 'axios';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const ViewTotalApplications = () => {
    const applications = useLoaderData();

    const handleUpdatedStatus = (e,applicationId) => {
        //console.log(applicationId)
        axios.patch(`http://localhost:8000/applications/${applicationId}`, {status: e.target.value})
        .then(res=>{
            if(res.data.modifiedCount){
                toast.success("Applications status updated successfully!")
            }
        })
        .catch(()=>{
            toast.error("There is some problem updating the status.Please try later.")
        })
    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Applicant Social Media</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application,index) => 
                                <tr key={application._id}>
                                    <th>{index+1}</th>
                                    <td>{application.applicant}</td>
                                    <td><a href={application.linkedIn}>LinkedIn</a></td>
                                    <td>
                                        <select onChange={e => handleUpdatedStatus(e,application._id)} defaultValue="Update status" className="select">
                                            <option disabled={true}>Update status</option>
                                            <option value='Hired'>Hired</option>
                                            <option value='Interview'>Interview</option>
                                            <option value='Pending'>Pending</option>
                                            <option value='Rejected'>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ViewTotalApplications;