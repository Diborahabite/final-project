import React, { useState } from 'react';
import { Link } from 'react-router-dom;
import { HiUser, HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center">
      <div className="bg-white h-150 pl-10 w-[400px] space-y-3 flex flex-col justify-center">
        <form className='space-y-3' action=''>
          <div>
            <p className='font-bold text-2xl tracking-wide text-center'>Signup</p>
          </div>
          <div className="mr-5">
            <select className="outline-none h-10 px-5 border border-sm w-full" required>
              <option value="" className='text-zinc-500'>Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <HiUser className="mx-2" />
              <input className="outline-none h-10 px-10 w-full" type="text" placeholder="Name" required />
            </div>
          </div>
          <div className="mr-5">
            <div className="flex items-center border border-sm w-full">
              <HiMail className="mx-2" />
              <input className="outline-none h-10 px-5 w-full" type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="mr-5">
            <div className={flex items-center border border-sm w-full transition-all duration-300 ${isPasswordFocused ? 'filter blur-md' : ''}}>
              <HiLockClosed className="mx-2" />
              <input
                className="outline-none h-10 px-5 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                required
              />
              <span onClick={togglePasswordVisibility}>{showPassword ? <HiEyeOff /> : <HiEye />}</span>
            </div>
          </div>
          <div className='flex gap-5 mt-1'>
            <input type="checkbox" />
            <p>I agree to the healthcare <Link to='/terms' style={{ textDecoration: 'underline', color: 'blue' }}>terms of service</Link> and <Link to='/privacy' style={{ textDecoration: 'underline', color: 'blue' }}>privacy policy</Link></p>
          </div>
          <div className='mt-10'>
            <button className='bg-blue-500 h-10 rounded-full w-full text-white font-semibold hover:bg-blue-500'>Signup</button>
            <p className='text-zinc-500'>If you have an account? <Link to='/Signin' className='font-semibold' style={{ textDecoration: 'underline', color: 'blue' }}>Signin</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
