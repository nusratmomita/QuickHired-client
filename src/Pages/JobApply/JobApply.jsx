import React from 'react';
import CustomHook from '../../CustomHook/CustomHook';
import { useParams } from 'react-router';

const JobApply = () => {
    const {id} = useParams();
    
    const {user} = CustomHook();
    console.log(user,id)

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;

        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedIn,github,resume);

        const jobApplication = {
            id,
            applicant: user?.email,
            linkedIn,
            github,
            resume
        }
    }

    return (
        <form onSubmit={handleApply} className="mb-40 mt-20 fieldset bg-base-200 text-black font-bold text-2xl rounded-box max-w-md mx-auto border p-4">
            <h1 className="mb-5 text-center ">Enter Your Information</h1>

            <label className="label text-xl">LinedIn Profile</label>
            <input type="url" name="linkedIn" className="input w-full " placeholder="Enter your linkedIn link" />

            <label className="label text-xl">Github Profile</label>
            <input type="url" name="github" className="input w-full" placeholder="Enter your github link" />

            <label className="label text-xl">Resume</label>
            <input type="url" name="resume" className="input  w-full" placeholder="Enter your resume link" />

            <button type="submit" className='mt-5 btn btn-active rounded-2xl bg-gradient-to-r from-green-800 to-green-400 text-white text-xl'>Apply</button>
        </form>
    );
};

export default JobApply;