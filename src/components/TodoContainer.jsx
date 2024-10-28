import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todolist from "./Todolist"
function TodoContainer() {
  const[activityarr,setactivityarr]=useState([
    {
        id:1,
        activity:"walk"
    },

    {
      id:2,
      activity:"Jump"
  },
  {
    id:3,
    activity:"Run"
}
])

  return (
    <>
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddTodoForm activityarr={activityarr} setactivityarr={setactivityarr}/>
        <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
      </div>
      </div>
    </>
  );
}
export default TodoContainer;
