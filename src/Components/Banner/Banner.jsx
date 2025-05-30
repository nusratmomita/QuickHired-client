import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';

// how to make the banner responsive
const Banner = () => {
    return (
        <div className="mt-15 mb-15 rounded-2xl max-w-7xl mx-auto hero bg-green-100 p-20">
            <div className="hero-content flex-col gap-40 lg:flex-row">
                <div className='lg:-ml-20'>
                    <motion.img
                        src={team1}
                        animate={{y:[150,30,150]}}
                        transition={{duration: 5 , repeat:Infinity}}
                        className="lg:max-w-lg border-s-8 border-green-600 border-b-8 rounded-t-[50px] shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x:[150,5,150]}}
                        transition={{duration: 15 , delay:5 , repeat:Infinity}}
                        className="lg:w-120 lg:h-90 border-e-8 border-green-600 border-b-8 rounded-t-[50px] shadow-2xl"
                    />
                </div>
                <div className='space-y-8'>
                    <motion.h1 
                        animate={{
                            // rotate: 360,
                            // x: (0,-200),
                            // transition: {duration:4 ,repeat:Infinity}
                        }}
                        
                        className="text-3xl font-bold">Latest <motion.span animate={{
                            color: ['#e033ff' , '#33ff74' , '#335eff' , '#ff3371'],
                            transition : {repeat:Infinity , duration:2 }
                            
                            }}>
                            JOBS
                            </motion.span> only for you!!</motion.h1>
                    <p className="relative py-8 px-6 text-2xl border-4 border-green-800 font-bold text-emerald rounded-3xl shadow-lg leading-relaxed transition duration-300 hover:scale-105 hover:shadow-2xl">
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