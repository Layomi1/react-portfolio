import { useState } from "react";

const Card = ({ title, description, link, pulseColor, activeColor, background, color}) => {
 const [isHovered, setIsHovered] =useState(false);

 const baseStyle={
  backgroundColor: background,
  transition: 'background-color 0.3s ease',
 }
 
 const hoverStyle= {
  background: isHovered? activeColor: background,
  
 }
  return (
    <a href={link} target="_blank">
      <div className="w-full md:max-w-[350px] h-auto p-5 overflow-hidden rounded-md cursor-pointer relative" style={{...baseStyle, ...hoverStyle }}  onMouseOver={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div>
          <h3 className="mb-3 text-2xl" style={{color: color}} >{title} </h3>
          <div className="absolute top-8 right-10">
            <span className="relative flex w-[10px] h-[10px] rounded-full  ">
              <span
                className=" animate-pulse w-full] h-full absolute shadow-box rounded-full inline-flex " style={{ backgroundColor: pulseColor }}
              >
                <span className="relative inline-flex rounded-full w-[10px] h-[10px]"  style={{ backgroundColor: pulseColor }}></span>
              </span>
            </span>
          </div>
        </div>
        <p className="text-lg">{description}</p>
      </div>
    </a>
  );
};

export default Card;
