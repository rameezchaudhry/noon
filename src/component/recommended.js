import React from "react";

function Recommended(props)
{
  
return (
  
    <div className="col   ">
      <img src={props.imageSrc} alt="" width="150"/>
    <h6>{props.desc}</h6>
    <p>{props.subDesc}</p>
    <h5>{props.price}</h5>

    </div>
   
)

}
export default Recommended;