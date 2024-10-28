function Card(props)
{
    return(
        <>
         <div className="px-10 py-5 text-center border rounded-md flex-grow" style={{ backgroundColor:props. bgcolor }}>
    <h1 className="font-medium text-2xl">{props.title}</h1>
    <p>{props.subtitle}</p>
     
  </div>
        </>
    )

}
export default Card