import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props)
{
  const navigate=useNavigate()
  const[eusername,seteusername]=useState()
  const[epswd,setepswd]=useState()
  const[ruser,setRuser]=useState(true)//Registered user
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
function checkuser()
{
  var userfound=false
  user.forEach( function(items)
  {
    if(items.username===eusername && items.password===epswd)
    {
      console.log("sucess");
      userfound=true
      navigate("/landing",{state:{user:eusername}})
      
    }
})
    if(userfound===false)
    {
      console.log("login failure");
      setRuser(false)
      
    }
  }

  






  return(
   <>
  <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
    <h1 className="text-3xl font-medium">Hey Hi</h1>
    {ruser?<p> I help to manage your activities after Login here:)</p>:<p className="text-red-400">Please signup before login</p>}
    <div className=" flex flex-col gap-2  my-5">
      <input type="text"  
      placeholder="username" 
      className="w-52 border-black p-1  border-rounded-md" onChange={handleUinput} value={eusername}/>
         <input type="text"  
      placeholder="Password" 
      className="w-52 border-black p-1  border-rounded-md"  onChange={handlePinput} value={epswd}/>
        
      <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>
      <p>Don't hanve an account? <Link to={"/signup"} className="underline">Signup</Link></p>
    </div>
    </div>
    </div>
   </>
  )
}
export default Login