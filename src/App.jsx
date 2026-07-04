import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { getLocalStorage } from "./utils/localStorage";
import { useState } from "react";
function App() {

  const [user, setUser] = useState(null)
  
  const handleLogin = (email,password) => {
    if(email === "admin@example.com" && password === "123") {
      setUser("admin")
      console.log(user)
    }
    else if(email === "sameer@example.com" && password === "123") {
     setUser("employee")
     console.log(user)
      }
    else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "admin" ? <AdminDashboard /> : ''}
      {user === "employee" ? <EmployeeDashboard /> : ''}  
    </>
  );
}

export default App;