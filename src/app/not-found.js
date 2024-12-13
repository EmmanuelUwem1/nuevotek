import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 sm:px-8 lg:px-20 text-center">
          <span className="flex justify-center items-center relative w-full h-96"><Image alt="" src={"/rafiki.png"} layout="fill" objectFit="contain" objectPosition="center"></Image></span>
          
    </div>
  );
}
