 export const Another=(props)=>{
    const data=props.val;
    return(
        <>
        <h3>Another page file show</h3>
        {/* <h4>{props.val}</h4> */}
        {/* <h4>{data}</h4> */}
        {data.map((itam)=>(
            <p>{itam}</p>
        ))} 


       
        </>
    )

}
