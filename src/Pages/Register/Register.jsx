import React, { useContext } from "react";
import Lottie from "lottie-react";
import RegisterLottie from "../../assets/registerLottie.json";
import { AuthContext } from "../../Authentication/AuthContext";
import { ToastContainer , toast } from "react-toastify";
import { useNavigate } from 'react-router';


const Register = () => {
  
  const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password)

    // creating a user
    createUser(email,password)
    .then((userInfo)=>{
      console.log(userInfo.user)
      toast.success("Created a new account successfully!");
      setTimeout(()=>{
                navigate('/');
      },2000)
    })
    .catch(()=>{
      toast.error("You've put incorrect credentials")
    })
  }
  return (
    <>
      <ToastContainer/>
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
              <button type="submit" className="btn bg-[#67AE6E] mt-4 text-2xl text-[#E1EEBC]">Register</button>
            </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Register;
