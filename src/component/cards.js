import React,{useState} from "react";
import Recommended from "./recommended";


function Cards()
{
    const [product,setProduct] = useState(
        [
          {
            productImage:"https://z.nooncdn.com/products/tr:n-t_240/v1605814243/N41044064A_1.jpg"
        ,
            desc:"Apple iPhone 12 Pro Max"
            ,
            subDesc:"With Face time 256GB"
            ,
            productPrice:"AED 4002.15"
        },
        
        {
            productImage:"https://z.nooncdn.com/products/tr:n-t_240/v1605814225/N41044047A_1.jpg"
        ,
            desc:"Apple iPhone 12 Pro Max"
            ,
            subDesc:"With Face time 256GB"
            ,
            productPrice:"AED 4102.15"
        },
        
        {
            productImage:"https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044033A_1.jpg"
        ,
            desc:"Apple iPhone 12 Pro Max"
            ,
            subDesc:"With Face time 256GB"
            ,
            productPrice:"AED 4682.15"
        },
        
        {
            productImage:"https://z.nooncdn.com/products/tr:n-t_240/v1605814243/N41044064A_1.jpg"
        ,
            desc:"Apple iPhone 12 Pro Max"
            ,
            subDesc:"With Face time 256GB"
            ,
            productPrice:"AED 4889.15"
        },
        
        
   
        ]
      )
      return(
          <div className="p-4 text-start"><h4>Recommended for you</h4>
        <div className=" flex-wrap d-flex  justify-content-sm-evenly">
        
            {product.map((e,i)=>{
                return( <div key={i}>
                    <Recommended imageSrc={e.productImage} desc={e.desc} subDesc={e.subDesc} price={e.productPrice}/>
                    
                </div>)
            })}
        </div>
        </div>
    )
}
export default Cards;



