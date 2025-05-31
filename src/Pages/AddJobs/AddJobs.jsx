import React from 'react';

const AddJobs = () => {

    const handleAddJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new formData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
    }

    return (
        <> 
            <form onClick={handleAddJob}>
                <fieldset className="fieldset mt-20 mb-20 bg-base-300 text-lg font-bold border-base-300 rounded-box max-w-sm mx-auto border p-4">
                    <legend className="text-center text-2xl font-bold">Add Job Details</legend>

                    <label className="label">Title</label>
                    <input type="text" name="title" className="input" placeholder="Enter title" />

                    <label className="label">Company Name</label>
                    <input type="text" name="company_name" className="input" placeholder="Enter Company Name" />

                    <label className="label">Company logo</label>
                    <input type="text" name="company_logo" className="input" placeholder="Enter Company Logo URL" />

                    <label className="label">Company Location</label>
                    <input type="text" name="company_location" className="input" placeholder="Enter Company Location" />
                </fieldset>

                <fieldset className='flex justify-center items-center flex-col gap-8 mb-20'>
                    <legend className="text-center text-2xl font-bold">Select Any</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
                        <input className="btn hover:bg-green-300" type="radio" name="jobType" aria-label="On-Site"/>
                        <input className="btn hover:bg-green-300" type="radio" name="jobType" aria-label="Remote"/>
                        <input className="btn hover:bg-green-300" type="radio" name="jobType" aria-label="Hybrid"/>
                    </div>
                </fieldset>

                <fieldset className='flex justify-center items-center flex-col gap-8 mb-20'>
                    <legend className="text-center text-2xl font-bold">Select A Job Category</legend>
                    <select defaultValue="Pick a Category" className="select select-success text-xl border-3 ">
                        <option disabled={true}>Pick a Category</option>
                        <option>IT</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </fieldset>

                <fieldset className='flex justify-center items-center flex-col gap-8 mb-20'>
                    <legend className="text-center text-2xl font-bold">Application Deadline</legend>
                    <input type="date" name="applicationDeadline" className="input" />
                </fieldset>

                <div className='flex justify-center items-center gap-8 mb-20'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl">Salary Range</legend>

                        <label className="label text-xl">Minimum</label>
                        <input type="text" name="salaryMin" className="input text-xl" placeholder="Minimum salary" />

                        <label className="label text-xl">Maximum</label>
                        <input type="text" name="salaryMax" className="input text-xl" placeholder="Maximum salary" />

                        <label className="label text-xl">Currency</label>
                        <select defaultValue="Pick a Currency" className="select select-success text-xl border-1 ">
                            <option disabled={true}>Pick a Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EU</option>
                        </select>
                    </fieldset>
                </div>

                <fieldset className='flex justify-center items-center gap-8 mb-20'>
                    <legend className='text-center text-2xl font-bold mb-4'>Job Description</legend>
                    <textarea placeholder="Write Job Description" name="jobDescription" className="textarea textarea-primary"></textarea>
                </fieldset>

                 <fieldset className='flex justify-center items-center gap-8 mb-20'>
                    <legend className='text-center text-2xl font-bold mb-4'>Job Requirements</legend>
                    <textarea placeholder="Write Job Requirements (Separated by comma)" name="jobRequirements" className="textarea textarea-primary"></textarea>
                </fieldset>

                <fieldset className='flex justify-center items-center gap-8 mb-20'>
                    <legend className='text-center text-2xl font-bold mb-4'>Job Responsibilities</legend>
                    <textarea placeholder="Write Job Responsibilities (Separated by comma)" name="jobResponsibilities" className="textarea textarea-primary"></textarea>
                </fieldset>

                <fieldset className="fieldset mt-20 mb-20 bg-base-300 text-lg font-bold border-base-300 rounded-box max-w-sm mx-auto border p-4">
                    <legend className="text-center text-2xl font-bold">Add HR info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name="hr_name" className="input" placeholder="Enter HR name" />

                    <label className="label">HR Email</label>
                    <input type="email" name="hr_email" className="input" placeholder="Enter HR email" />
                </fieldset>

                <button type="submit" className="btn btn-neutral mt-4">Add job</button>
            </form>
            
        </>
    );
};

export default AddJobs;