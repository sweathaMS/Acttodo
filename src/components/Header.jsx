function Header(props)
{
    return (
        <>
       <div>
           <h2 className="font-medium text-3xl">Hello {props.name}</h2>
           <p>I help  you  to manange your activities:)</p>
         </div> 
      
        </>
    )
}
export default Header