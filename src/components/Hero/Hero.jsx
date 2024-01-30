import React from 'react'
import Image1 from "../../assets/website/women.png";
import Image2 from '../../assets/website/shopping.png';
import Image3 from '../../assets/website/sale.png';
import Slider from "react-slick";

const ImageList = [
    {
     id:1,
     img: Image1,
     title:"Upto 50% off on all Men's Wear",
     description :""
    },
    {
     id:2,
     img: Image2,
     title:"30% off on all Women's Wear",
     description :""
   
    },
    {
     id:3,
     img: Image3,
     title:"70% off on all Products Sale",
     description :""
   
    }
]

const Hero = () => {

  var settings = {
    dots:false,
    arrows:false,
    Infinits:true,
    speed:800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-auto",
    pauseOnHover:false,
    pauseOnFocuse:true,
  };  
  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
    {/*background pattern*/}
     <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
     </div>
    {/*hero section*/}
    <div className="container pb-8 sm:pb-0">
      <Slider {...settings}>
        {ImageList.map((data) => (
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
       {/*text content section*/}
       <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
        <h1 
         data-aos="zoom-out" 
         data-aos-once="true"
         data-aos-duration="500"
        className="text-5xl sm:text-6xl lg:text-7xl font-bold ">{data.title}</h1>
        <p
         data-aos="fade-up" 
         data-aos-deplay="100"
         data-aos-duration="500"
         className="text-sm"
        >{data.description}</p>
        <div
         data-aos="fade-up" 
         data-aos-deplay="300"
         data-aos-duration="500"
        
        >
          <button
          className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >Order Now</button>  
        </div>
       </div>
       {/*image section*/}
       <div className="order-1 sm:order-2">
        <div data-aos="zoom-in" data-aos-once="true"
         className="relative z-10">
          <img src={data.img} alt=''
          className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] bjext-contain mx-auto sm:scale-105 lg:scale-120" 
          />
        </div>
       </div>
      </div>
     </div>

        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Hero