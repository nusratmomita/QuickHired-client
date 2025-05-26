import React from "react";
import Lottie from "lottie-react";
import RegisterLottie from "../../assets/registerLottie.json";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{width : "320px"}} animationData={RegisterLottie} loop={true}></Lottie>
        </div>
        <div className="card-body bg-[#328E6E] rounded-2xl m-4">
          <h1 className="text-5xl font-bold text-[#E1EEBC]">Register Now!</h1>
          <form onSubmit={handleRegister} className="fieldset ">
            <label className="label text-2xl font-bold text-white">Email</label>
            <input type="email" name="email" className="input rounded-xl" placeholder="Email" />
            <label className="label text-2xl font-bold text-white">Password</label>
            <input type="password" name="password" className="input rounded-xl" placeholder="Password" />
            <button type="submit" className="btn bg-[#67AE6E] mt-4 text-2xl text-[#E1EEBC]">Login</button>
          </form>
      </div>
      </div>
    </div>
  );
};

export default Register;
