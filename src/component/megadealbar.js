import React,{useState} from "react";
import Megadeal from "./megadeal"
import megadealLogo from "../images/megadeal.gif"


function Megadealbar() {
    const [MegadealOpt, setMegadealOpt] = useState(
        [
            {
                image: "https://k.nooncdn.com/cms/pages/20210613/2f89c20b912ee53478c0acfddb0a3c89/en_mb-01.png",
            },
            {
              image: "https://k.nooncdn.com/cms/pages/20210613/2f89c20b912ee53478c0acfddb0a3c89/en_mb-02.png",
          },
          {
            image: "https://k.nooncdn.com/cms/pages/20210614/6df66442d5148f7c93a1347fe6e9a6d7/en_mb-04.png",
        },
        {
          image: "https://k.nooncdn.com/cms/pages/20210614/04ec77f789ecccd71a2d345998bbd49d/en_mb-01.png",
      },

        ]
    )
    return(
      <div className="bg-color-mega">
        <img src={megadealLogo} width="100%"alt="" />
        <div className="d-flex flex-wrap justify-content-sm-evenly bg-color-mega">
         
          { MegadealOpt.map((e,i)=>{
            return( <div key={i}>  <Megadeal image={e.image} /> </div> )
          }
          )
}
        </div>
        </div>
    )
}
export default Megadealbar;