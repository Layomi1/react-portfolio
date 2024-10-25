import logo from "../assets/logo.png";
import Button from "./Button";
import layomi1 from "../assets/layomi1.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row pt-10 px-5 md:px-28 gap-6 md:justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="max-w-[50px] md:max-w-[40px]"/>
          <a href="mailto:layomilawore@gmail.com" className="text-primary" target="_blank">layomilawore@gmail.com</a>
          <div><Button text="Hire me"  /></div>
          
        </div>

        <figure>
          <img src={layomi1} alt="layomi"className="max-w-[200px] ro" />
        </figure>
      </div>


      <div className="flex flex-col md:justify-evenly md:flex-row"> 
      <div className="">
        <h5>Mentors</h5>
        <ul>
          <li>
            <a href="https://github.com/afolabiopakunle" target="_blank">
              Afolabi Opakunle
            </a>
          </li>

          <li>
            <a href="https://github.com/daposta" target="_blank">
              Oladapo Lawore
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Students</h5>
        <ul>
          <a href="https://github.com/afolabiopakunle" target="_blank">
            Afolabi Opakunle
          </a>
        </ul>
      </div>

      <div>
        <h5>Recommended Sites</h5>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/" target="_blank">
              FreeCodeCamp.org
            </a>
          </li>
          <li>
            <a href="https://courses.webdevsimplified.com/" target="_blank">
              Web Dev Simpified
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/c/JavaScriptMastery"
              target="_blank"
            >
              JS Mastery
            </a>
          </li>
        </ul>
      </div>
      </div>
     
    </div>
  );
};

export default Footer;
