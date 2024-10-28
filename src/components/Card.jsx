// import Pulse from '../components/Pulse';
// import cardDetails from '../data';

const Card = ({ title, description, link, backgroundColor }) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full md:max-w-[350px] h-auto p-5 overflow-hidden rounded-md hover:bg-yellow bg-mushroom cursor-pointer relative ">
        <div>
          <h3 className="mb-3 text-2xl">{title}</h3>
          <div className="absolute top-5 right-10">
            <span className="relative flex w-[10px] h-[10px] rounded-full  ">
              <span
                className=" animate-pulse w-full] h-full absolute shadow-box rounded-full inline-flex " style={{ backgroundColor: backgroundColor }}
              >
                <span className="relative inline-flex rounded-full w-[10px] h-[10px]"  style={{ backgroundColor: backgroundColor }}></span>
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
