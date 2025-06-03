import React, { Suspense } from 'react';
import CustomHook from '../../CustomHook/CustomHook';
import MyPostedJobList from './MyPostedJobList';
import { myPostedJobsPromise } from '../../API/MyPostedJobsPromise';

const MyPostedJobs = () => {

    const {user} = CustomHook();
    //console.log(myPostedJobsPromise)
    //console.log(user)

    return (
        <div className='m-50'>
            <h1 className='mb-20 text-4xl font-bold text-center'>All the jobs created by me</h1>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <MyPostedJobList MyPostedJobsPromise={myPostedJobsPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;