

import Todoitems from './Todoitem';
function Todolist(props)
{
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr
    
return(
    <>
   
    <div className="bg-purple-200 p-5 border rounded-md flex-grow ">
            <h2 className="text-2xl font-medium">Today's Activities</h2>
            
            {activityarr.length===0?<p>You Haven't Added Yet</p>:""}
            {
                activityarr.map(function(items,index)
            {
                return<Todoitems id={items.id}items={items} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>
           
                
            })
            }

        </div>
    </>
)
}


export default Todolist