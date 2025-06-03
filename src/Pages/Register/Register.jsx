import React, { useContext } from "react";
import Lottie from "lottie-react";
import RegisterLottie from "../../assets/registerLottie.json";
import { AuthContext } from "../../Authentication/AuthContext";
import { ToastContainer , toast } from "react-toastify";
import { useNavigate } from 'react-router';


const Register = () => {
  
  const {createUser , handleGoogleAuth} = useContext(AuthContext);

    const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // //console.log(email,password)

    if(!email || !password){
      toast.error("You must fill in all the field.")
      return;
    }

    // creating a user
    createUser(email,password)
    .then((userInfo)=>{
      //console.log(userInfo.user)
      toast.success("Created a new account successfully!");
      setTimeout(()=>{
                navigate('/');
      },2000)
    })
    .catch(()=>{
      toast.error("You've put incorrect credentials")
    })
  };

  const handleGoogleRegister = () => {
    handleGoogleAuth()
      .then(()=>{
          // //console.log(result.user);
          toast.success("Register with Google successfully!");
          setTimeout(()=>{
              navigate('/');
          },2000)
      })
      .catch(()=>{
          // //console.log(error)
          toast.error("Login with Google faced some problems.")
      })
  };

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

              <div>
                <button type="submit" className="btn w-full bg-[#67AE6E] mt-4 text-2xl text-[#E1EEBC]">Register</button>
                <div className="divider text-[#E1EEBC] text-xl">OR</div>
                <button onClick={handleGoogleRegister} type="button" className="btn bg-white w-full text-black border-[#E1EEBC]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Register with Google
                </button>
              </div>
            </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Register;
