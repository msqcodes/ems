import { useState } from "react";
const Login = () => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("hello , form got submitted")
  }


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="w-[380px] rounded-2xl border border-gray-700 bg-gray-800 p-10 shadow-2xl">
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input 
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value)
              console.log(email)
            }}
            required
            className="w-full rounded-full border border-emerald-500 bg-transparent px-5 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
              console.log(password,email)
            }}
            required
            className="w-full rounded-full border border-emerald-500 bg-transparent px-5 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            type="password"
            placeholder="Enter password"
          />

          <button
            className="mt-2 w-full rounded-full bg-emerald-500 px-5 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-600 active:scale-95"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;