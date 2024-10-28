import { useState } from "react"

function AddTodoForm(props)
{
  const activityarr=props.activityarr
  const setactivityarr=props.setactivityarr

  const[newactivity,setnewactivity]=useState("")
  function handlechange(event)
  {
    setnewactivity(event.target.value)
  }
  function addactivity()
  {
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
  }
    return(
        <>
        <div className="flex flex-col gap-3">
          <h1>Manage Activities</h1>
          <div>
            <input
              type="text"
              className="border border-black rounded bg-transparent p-2"
              placeholder="Add Activity" value={newactivity} onChange={handlechange}>

              </input>
            <button className="bg-black text-white p-2 border border-black rounded" onClick={addactivity}>
              ADD
            </button>
          </div>
        </div>

        </>
    )
}
export default AddTodoForm