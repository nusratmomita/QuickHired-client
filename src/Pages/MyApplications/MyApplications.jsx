import React, { Suspense } from 'react';
import MyApplicationList from './MyApplicationList';
import CustomHook from '../../CustomHook/CustomHook';
import { myApplicationsPromise } from '../../API/MyApplicationsPromise';


// not the we would use because we want to show the job details in this component.
// but we didn't pass this from the backend to show it here 
// also we can't use user info from here as it is outside of the const MyApplication component
// const myApplicationsPromise = fetch(``);

// to avoid this we are using a FUNCTION 
// making a new file just to organize things 
// can be ignored 
// const myApplicationsPromise = (email) => {
//     return fetch(`http://localhost:8000/applications?email=${email}`);
// }


const MyApplications = () => {
    const {user} = CustomHook();
    // //console.log(user.email)
    //console.log(myApplicationsPromise)
    return (
        <div>
            My Applications
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <MyApplicationList myApplicationsPromise = {myApplicationsPromise(user.email)}></MyApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;