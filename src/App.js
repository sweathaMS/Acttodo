import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
function App() 
  {
    const[user,setuser]=useState(
      [
        {
          username:"sweatha",
          password:"123"
        },
        {
          username:"buvan",
          password:"123"
        }
      ]
    )
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} setuser={setuser} />} />
          <Route
            path="/signup"
            element={<Signup user={user} setuser={setuser} />}
          />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
