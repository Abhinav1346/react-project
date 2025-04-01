import React from 'react';

function Login() {
  return (
    <div className="container max-w-xl mt-20 mx-auto bg-[#282828] p-6 max-h-[500] rounded-xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-xl font-bold text-white">
          Welcome Back to Job<span className="text-red-500">Finder</span>
        </h1>
        <p className="font-semibold text-md text-center text-[#121212]">
          Please login to access your account
        </p>
      </div>
      <form>
        <label className="text-white font-semibold block text-md mb-2  placeholder:font-bold">
          Name
        </label>
        <input
          className="bg-[#121212]
            rounded-xl w-full text-white placeholder:text-[#282828] focus:outline p-3 focus:outline-red-500"
          type="text"
          placeholder="John doe"
        />
        <label className="text-white font-semibold block text-md my-2">
          Email
        </label>
        <input
          className="bg-[#121212]
            rounded-xl w-full text-white placeholder:text-[#282828] focus:outline p-3 
            placeholder:font-bold focus:outline-red-500"
          type="email"
          placeholder="johndoe@example.com"
        />
        <button className="bg-red-400 rounded-xl w-full px-10 py-2 text-white font-bold my-4">
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
