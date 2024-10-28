import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
function Signup(props)
{
  const navigate=useNavigate()
  const[eusername,seteusername]=useState()
  const[epswd,setepswd]=useState()
  const user=props.user
  const setuser=props.setuser
  function handleUinput(event)
  {
    seteusername(event.target.value)


  }
  function handlePinput(event)
  {
    setepswd(event.target.value)
}
function adduser()
  {
    setuser([...user,{username:eusername,password:epswd}])
    navigate("/")
  }

  
  return(
   <>
   <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
    <h1 className="text-3xl font-medium">Hey Hi</h1>
    <p>Signup here:)</p>
    <div className=" flex flex-col gap-2  my-5">
      <input type="text"  
      placeholder="username" 
      className="w-52 border-black p-1  border-rounded-md" onChange={handleUinput}/>
         <input type="text"  
      placeholder="Password" 
      className="w-52 border-black p-1  border-rounded-md" onChange={handlePinput}/>
         <input type="text"  
      placeholder="Confirm password" 
      className="w-52 border-black p-1  border-rounded-md"/>
      <button className="bg-[#dabe72] w-24 p-1 rounded-md" onClick={adduser}>Signup</button>
      <p>Already hanve an account? <Link to={"/"} className="underline">Login</Link></p>
    </div>
    </div>
    </div>
   </>
  )
}
export default Signup