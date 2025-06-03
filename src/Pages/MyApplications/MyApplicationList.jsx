import React, { use } from "react";

const MyApplicationList = ({ myApplicationsPromise }) => {
  // //console.log(myApplicationsPromise)
  const applicationList = use(myApplicationsPromise);
  //console.log(applicationList);
  return (
    <div>
      <h1 className="text-3xl font-medium text-center">
        Total applied jobs so far : {applicationList.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applicationList.map((application , index) => 
                    <tr key={application._id}>
                        <th>
                           { 
                                index+1
                           }
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={application.company_logo}
                                    alt="company_logo"
                                />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{application.company}</div>
                                <div className="text-sm opacity-50">{application.location}</div>
                            </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">
                            Desktop Support Technician
                            </span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                
                )
            }        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplicationList;
