
import logo from '../assets/logo.png'
import Button from './Button'

const Header = () => {
  return (
    <div className="absolute bg-yellow w-full md:w-1/2  h-[70px] top-0 left-0 flex items-center md:pl-4 py-4  md:p-2 pl-0 text-white font-semibold text-white  md:justify-around gap-6 md:gap-0 md:pr-7" >
      <img src={logo} alt="logo" className='max-w-[30px] md:max-w-[40px]'/>
      <Button text='Show Me Around' />
      <ul className='flex justify-between gap-10'>
        <li><a href="https://github.com/layomi1" target='_blank'>GitHub</a></li>
        <li className='hidden md:flex'><a href="https://x.com/Iamlayomi1" target='_blank'>Twitter</a></li>
        <li className='hidden  md:flex '><a href="https://www.linkedin.com/in/agnesoluwalayomilawore" target='_blank'>LinkedIn</a></li>
      </ul>


    </div>
  )
}

export default Header