import Slider from "./components/slider";

function About() {
  return (
    <>
      <h2 className="text-black font-medium text-lg lg:text-2xl lg:pl-20 pl-4 pt-16">
        About
      </h2>
      <p className="text-black font-medium text-3xl lg:text-5xl lg:pl-20 pl-4 mb-16">
        Nuevotek
      </p>
      <div className="flex justify-start items-center pl-4 lg:pl-20">
        <Slider />
      </div>
      <div className="flex items-center justify-center w-full">

      <p className="px-4 lg:px-20 md:w-[80%] font-medium text-base py-12 text-center">
        We offer a wide range of services designed to support businesses of all
        sizes in building, managing, and scaling their telecommunications
        infrastructures.
      </p>
      </div>
      <div className="flex gap-8 justify-between items-center w-full flex-wrap">
        <div>
          <span><p></p><p></p></span>
        </div>
      </div>
    </>
  );
}

export default About;
