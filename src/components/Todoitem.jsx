function Todoitems(props)
    {
        const activityarr=props.activityarr
        const setactivityarr=props.setactivityarr
        function handleDelete(deletedid)
        {
           var temparray=activityarr.filter(function(items)
        {
            if(items.id==deletedid)
            {
                return false
            }
            else{
                return true
            }
        }
        )
            setactivityarr(temparray)
        
        }
        return(
            <>
            <div className="flex justify-between">
            <p>{props.index+1}.{props.items.activity}</p>
            <button className="text-red-600" onClick={function(){handleDelete(props.id)}}>Delete</button>
            </div>
            </>
        )
    }

export default Todoitems