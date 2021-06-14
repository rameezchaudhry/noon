
import React from "react";
function Category(props)
{
    return(
        <div className="rounded-circle">
         <img width="70" src={props.image}  alt="" />
        </div>
    )

}
export default Category;