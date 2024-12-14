import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 sm:px-8 lg:px-20 text-center">
      <span className="flex justify-center items-center relative w-full h-96">
        <Image
          alt=""
          src={"/rafiki.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        ></Image>
      </span>
      <Link
        href={"/"}
        className="bg-[var(--primary-color)] text-white text-base font-medium px-8 rounded-md mt-12 py-2"
      >
        Go home
      </Link>
    </div>
  );
}
