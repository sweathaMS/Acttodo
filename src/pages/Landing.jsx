import Card from "../components/Card";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data=useLocation()
  return(
    <>
  <div className="bg-black p-16">
  <div className="bg-[#EFEFEF] p-10 rounded-md">
  
  <Header name={data.state.user}/>
 
  <div className="flex justify-between gap-5 my-5 flex-wrap">
  <Card bgcolor={"#8272DA"} title={"27"} subtitle={"Chennai"}/>
  <Card bgcolor={"#FD6663"} title={"December"} subtitle={"16:09:56"}/>
  <Card bgcolor={"#FCA201"} title={"Built Using "} subtitle={"React"}/>
  
  </div>
  <TodoContainer/>
 
  </div>
  </div>
  </>
  )
  
}

export default Landing;