import React from 'react'
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women3.png";
import Img4 from "../../assets/women/women4.png";
import { FaStar} from "react-icons/fa6";


const ProductsData = [
 
 {
    id:1,
    img:Img1,
    title:"Women ethnic",
    rating:5.0,
    color:"white",
    aosDelay:"0",
 },
 {
    id:2,
    img:Img2,
    title:"Women western",
    rating:4.5,
    color:"red",
    aosDelay:"200",
 },
 {
    id:3,
    img:Img3,
    title:"Goggle",
    rating:4.7,
    color:"brown",
    aosDelay:"400",
 },
 {
    id:4,
    img:Img4,
    title:"Printed T-shirt",
    rating:4.4,
    color:"yellow",
    aosDelay:"600",
 },
 {
    id:5,
    img:Img5,
    title:"Fashin T-Shirt",
    rating:"4.5",
    color:"Pink",
    aosDelay:"800",
 },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
     <div className="container">
        {/*hero section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
         <p className="text-sm text-primary">Top Selling Products for you</p>
         <h1 className="text-3xl font-bold">Products</h1>
         <p className="text-xs text-gray-400">lohdjhdhfjjdjkjd</p>
        </div>
        {/*body section */}
        <div>
         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
         {/*card section*/}
         
            {/* {ProductsData.map((data) => (
              <div>
                <img src={data.img} alt=''
                 className="h-[220px] w-[150px] object-cover rounded-md"
                />
              </div>
            ))
         }; */}
         </div>
        </div>
     </div>
    </div>
  )
}

export default Products