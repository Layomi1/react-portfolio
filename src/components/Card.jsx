import Pulse from '../components/Pulse';
import cardDetails from '../data';

const Card = ({ title, description, link}) => {
  return (
    <a href={link} target='_blank'>
       <div className="w-full md:max-w-[350px] h-auto p-5 overflow-hidden rounded-lg hover:bg-yellow bg-mushroom cursor-pointer">
      <div className='flex items-center justify-between'>
        <h3 className='mb-3 text-2xl'>{title}</h3>
        <Pulse pulse= {cardDetails.backgroundColor}/>
      </div>
      <p className='text-lg'>{description}</p>
    </div>
    </a>
   
  )
}

export default Card