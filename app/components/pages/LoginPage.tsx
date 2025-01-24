
import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BsArrowRight, BsEye } from 'react-icons/bs';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-[url('/product-bg.png')] bg-cover bg-center ">
        {/* <div className="absolute inset-0 bg-white bg-opacity-50"></div> */}
      {/* Background and Content */}
      <div className="  bg-gray-50 flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col py-8 px-8 lg:px-12">
          <img src="/logo.png" alt="Mark8 Logo" width={48} height={48} className="mb-4" />
          
          <div className='mt-20'>
          <h1 className="text-2xl font-bold text-gray-700">Mark8</h1>
          <p className="text-gray-500 mb-8">By Awesomity Lab</p>
          </div>
          <p className="text-sm text-gray-400 mt-auto">© 2024 Awesomity Lab</p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
          <h2 className="text-xl text-gray-700 mb-4 font-bold">Login</h2>
          {/* Form */}
          <form>
            {/* Email */}
            <div className="mb-6 relative">
            <label className="flex items-center text-sm text-gray-500 mb-2 font-medium">Email</label>          
    <AiOutlineMail className="absolute left-3 top-11 text-[#C1CF16]" />
    <input
      type="email"
      placeholder="Enter email"
      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  </div>
            {/* Password */}
           < div className="mb-6 relative">
           <label className="flex items-center text-sm text-gray-500 mb-2 font-medium">Password</label>        
    <AiFillLock className="absolute left-3 top-11 text-[#C1CF16]" />
    <input
      type="password"
      placeholder="Enter password"
      className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
    <BsEye className="absolute right-3 top-11 text-black cursor-pointer" />
  </div>
            <div className='flex flex-row items-center justify-between'>
            {/* Forgot Password */}
            <div className="text-right text-sm mb-4">
              <a href="#" className="text-black hover:underline font-semibold underline ">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-[125px] py-3 bg-[#C1CF16] text-black rounded-lg shadow hover:bg-green-600 transition font-semibold"
            >
              Login <BsArrowRight className="inline ml-2" />
            </button>
            </div>
          </form>
        </div>
      </div>

      {/* Register Section */}
      <div className="mt-6 w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
        <div className="flex flex-col text-[14px] gap-4">
        <p className="text-gray-600">New Here?</p>
        <p className="text-gray-600 font-light">Create an Account</p>
        </div>
        <button
        className="py-3 px-6  text-black border focus:border-gray-700 rounded-lg flex items-center gap-2 shadow hover:bg-[#C1CF16] transition font-semibold"
        >
          Register Here <BsArrowRight  className='text-[#C1CF16]'/>
        </button>
      </div>
    </div>
  );
}
