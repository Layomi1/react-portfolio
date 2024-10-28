import logo from "../assets/logo.png";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row pt-10 px-5 md:px-28 gap-6 md:justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="max-w-[50px] md:max-w-[40px]" />
          <a
            href="mailto:layomilawore@gmail.com"
            className="text-primary bg-transparent no-underline"
            target="_blank"
          >
            layomilawore@gmail.com
          </a>
          <div>
            <Button text="Hire me" />
          </div>
        </div>
        <div className="w-[200px] h-[200px] relative border-2 border-dashed border-border pt-12">
        <a href="https://github.com/layomi1" target="_blank" className="relative w-full h-full cursor-pointer ">
          <section className="w-full h-full relative spin">
            <div className="w-full h-full shadow-shadow  absolute overflow-hidden shape">
              <figure className="spin-reverse w-[140%] h-[140%] absolute left-[-21%] top-[-21%]  flex text-gray text-[5vw] font-bold items-center justify-center uppercase  opacity-100  bg-cover bg-footerImage"></figure>
            </div>
            </section>         
        </a> 
        </div>
       
      </div>

      <div className="flex flex-col md:justify-evenly md:flex-row gap-8 ">
        <div className="">
          <h5 className="text-red font-semibold mb-2">Mentors</h5>
          <ul>
            <li>
              <a
                href="https://github.com/afolabiopakunle"
                target="_blank"
                className="text-gray"
              >
                Afolabi Opakunle
              </a>
            </li>

            <li>
              <a
                href="https://github.com/daposta"
                target="_blank"
                className="text-gray"
              >
                Oladapo Lawore
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-red font-semibold mb-2">Students</h5>
          <ul>
            <a
              href="https://github.com/afolabiopakunle"
              target="_blank"
              className="text-gray"
            >
              James Adeshina
            </a>
          </ul>
        </div>

        <div>
          <h5 className="text-red font-semibold mb-2">Recommended Sites</h5>
          <ul>
            <li>
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                className="text-gray"
              >
                FreeCodeCamp.org
              </a>
            </li>
            <li>
              <a
                href="https://courses.webdevsimplified.com/"
                target="_blank"
                className="text-gray"
              >
                Web Dev Simpified
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/c/JavaScriptMastery"
                target="_blank"
                className="text-gray"
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
