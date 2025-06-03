// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Mail, User2 } from "lucide-react";
import { Link, useLoaderData } from "react-router";

const JobCard = () => {
    const job = useLoaderData();
    // //console.log(job)

    return (
        <div className="flex items-center justify-center m-10">
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-lg border border-green-200 hover:shadow-2xl transition-shadow duration-300"
                >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <img
                        src={job.company_logo}
                        alt={job.company}
                        className="w-14 h-14 rounded-full bg-white p-1 shadow-md"
                    />
                    <div>
                        <h2 className="text-white font-bold text-xl">{job.title}</h2>
                        <p className="text-green-100 text-sm">{job.company}</p>
                    </div>
                    </div>
                    <span className="bg-white text-green-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    {job.jobType}
                    </span>
                </div>

                {/* Body */}
                <div className="p-6 space-y-3 text-gray-700">
                    <p className="text-sm">{job.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-500" />
                        {job.location}
                    </p>
                    <p className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-green-500" />
                        {job.category}
                    </p>
                    <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-500" />
                        Deadline: {job.applicationDeadline}
                    </p>
                    <p className="flex items-center gap-2">
                        💰 {job.salaryRange.min.toLocaleString()} - {job.salaryRange.max.toLocaleString()}{" "}
                        {job.salaryRange.currency.toUpperCase()}
                    </p>
                    </div>

                    <div>
                    <h3 className="font-semibold text-green-700">Requirements:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {job.requirements.map((req, i) => (
                        <span
                            key={i}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                        >
                            {req}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div>
                    <h3 className="font-semibold text-green-700">Responsibilities:</h3>
                <ul className="list-disc list-inside text-sm">
                {job.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                ))}
                </ul>
            </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center text-sm text-gray-600 border-t">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <User2 className="w-4 h-4 text-green-500" />
                        {job.hr_name}
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-green-500" />
                        {job.hr_email}
                    </div>
                </div>
                <Link to={`/jobApply/${job._id}`}><button className="btn btn-soft bg-green-600 text-white btn-success">Apply Now</button></Link>
            </div>
        </motion.div>
    </div>
    );
};

export default JobCard;
