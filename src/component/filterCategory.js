import Category from "./category";
import { useState } from "react";

// import React from "react";
function FilterCategory()
{
const[category,setCategory] = useState(
    [
    {
        image:"https://k.nooncdn.com/cms/pages/20210609/ab5cd4c757d262915aae67797aa261f0/en_mb-category-01.png",
        Category:"Home&Kitchen"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-09.png",
        Category:"Appliance"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-15.png",
        Category:"Grocerries"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-10.png",
        Category:"Sports"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-12.png",
        Category:"Laptops"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-02.png",
        Category:"Women'sFashion"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-01.png",
        Category:"Men'sFashion"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-06.png",
        Category:"Beauty"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-14.png",
        Category:"fragrance"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210613/779b86493c723f8a40c50e064a439647/en_mb-category-14%20(1).png",
        Category:"SummerbabyBananza"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-03.png",
        Category:"Mobiles"
    },
    {
        image:"https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-04.png",
        Category:"Electronics"
    },
    ]
)

return(
<div className="d-flex flex-wrap justify-content-sm-evenly m-0 p-4">
   { category.map((e,i)=>{
return(
<div key={i} >
<Category image={e.image} category={e.Category} />

</div>
)

    })}
</div>
)
}
export default FilterCategory;