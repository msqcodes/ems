import { useState } from "react";

const Login = ({ handleLogin }) => {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("email is : ",email , "password is : ",password)
    setEmail('')
    setPassword('')
  }


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white ">
      <div className="rounded-xl border-2 border-emerald-600  p-10 ">
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center "
        >
          <input 
            value = {email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
            className="w-full rounded-full border-2 border-emerald-600 font-medium bg-transparent px-6 py-2 text-lg  outline-none  placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            className="w-full rounded-full border-2 border-emerald-600 font-medium bg-transparent px-6 py-2 mt-3 text-lg  outline-none   placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />

          <button
            className="mt-7 w-full rounded-full bg-emerald-500 px-8 py-2 text-lg  text-white border-none hover:bg-emerald-700 "
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