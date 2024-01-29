import React from 'react'
import Image1 from "../../assets/website/women.png";
import Image2 from '../../assets/website/shopping.png';
import Image3 from '../../assets/website/sale.png';

const ImageList = [
    {
     id:1,
     img: Image1,
     title:"",
     description :""
    },
    {
     id:2,
     img: Image2,
     title:"",
     description :""
   
    },
    {
     id:3,
     img: Image3,
     title:"",
     description :""
   
    }
]

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]">
    {/*background pattern*/}
     <div className="h-[400px] w-full bg-primary/40 abslute">
      <div>
        <img 
        src={Image1}
        />
      </div>
     </div>
    {/*hero section*/}
    </div>
  );
};

export default Hero