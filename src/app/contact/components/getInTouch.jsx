import Form from "../form";

function GetInTouch() {
  return (
    <section className="flex-col items-center justify-center flex w-full py-16">
      <div className="flex flex-col w-1/2 md:w-2/3 justify-center items-center h-full">
        <h2 className="font-medium text-4xl lg:text-6xl text-[var(--primary-color)] text-center">
          Get in touch
        </h2>
        <p className="text-black font-normal text-base w-fit mt-2 text-center">
          We’re Here to Help You Build Your Future-Proof Network Infrastructure
        </p>
        <Form />
      </div>
    </section>
  );
}

export default GetInTouch;
