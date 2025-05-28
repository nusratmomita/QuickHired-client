import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team1.png';
// import team2 from '../../assets/team2.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[150,30]}}
                        transition={{duration: 5 , repeat:Infinity}}
                        className="max-w-lg border-s-8 border-green-600 border-b-8 rounded-t-[50px] shadow-2xl"
                    />
                    {/* <img
                        src={team2}
                        className="max-w-sm rounded-lg shadow-2xl"
                    /> */}
                </div>
                <div className='space-y-8 flex-1'>
                    <motion.h1 
                        animate={{
                            // rotate: 360,
                            // x: (0,-200),
                            // transition: {duration:4 ,repeat:Infinity}
                        }}
                        
                        className="text-5xl font-bold">Latest <motion.span animate={{
                            color: ['#e033ff' , '#33ff74' , '#335eff' , '#ff3371'],
                            transition : {repeat:Infinity , duration:2 }
                            
                            }}>
                            JOBS
                            </motion.span> only for you!!</motion.h1>
                    <p className="relative py-8 px-6 text-2xl font-bold text-white bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 rounded-3xl shadow-lg leading-relaxed transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <span className="block mb-2">🚀 Find top-notch jobs with <span className="italic underline">QuickHired</span>!</span>
                        <span className="block mb-2">Create a profile and chase your dream job with ease.</span>
                        <span className="block">👔 Recruiter? We've got the best job seekers waiting for you.</span>
                    </p>
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;