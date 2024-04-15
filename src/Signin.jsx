import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center">
      <div className="bg-white h-150 pl-10 w-[400px] space-y-3 flex flex-col justify-center">
        <form className='space-y-3' action=''>
          <div>
            <p className='font-bold text-2xl tracking-wide text-center'>Signin</p>
          </div>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <HiMail className="mx-2" />
              <input className="outline-none h-10 px-5 w-full" type="email" placeholder="Enter your Email" required />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <HiLockClosed className="mx-2" />
              <input
                className="outline-none h-10 px-5 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                required
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
            </div>
          </div>
          <div>
            <p className='text-end text-blue-600'>forgot password?</p>
          </div>
          <div className='mt-10'>
            <button className='bg-blue-500 h-10 rounded-full w-full text-white font-semibold hover:bg-blue-600'>Signin</button>
            <p className='text-zinc-500'>do not have an account? <Link to='/Signup' className='font-semibold' style={{ textDecoration: 'underline', color: 'blue' }}>Signup</Link></p>
          </div>
          <p className='flex justify-center font-bold'>OR</p>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <FaGoogle className="mx-2" />
              <input className="outline-none h-10 px-5 w-full font-bold" type="text" placeholder="Sign in with Google" required />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <FaFacebook className="mx-2" />
              <input className="outline-none h-10 px-5 w-full font-bold" type="text" placeholder="Sign in with Facebook" required />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
