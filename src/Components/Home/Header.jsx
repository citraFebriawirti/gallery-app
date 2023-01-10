import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container my-16 px-5 flex flex-wrap">
      <aside className="w-full self-center px-5 lg:w-1/2">
        <h1
          className="block text-4xl text-[#213644]
        font-bold lg:text-6xl md:text-5xl"
        >
          Gallery App
        </h1>
        <p className="font-normal text-gray-400 mb-5 leading-relaxed md:text-base lg:text-xl lg:mt-3">
          App for all photos that are arranged automatically
        </p>
        <Link
          to="/addPhotos"
         
          className="text-base font-semibold text-white bg-[#C6AB7C] py-2 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-150"
        >
          Get Started
        </Link>
      </aside>
      <aside className="w-full self-end px-5 lg:w-1/2">
        <div className="mt-9">
          <img
            src="../image/content/header.svg "
            className="max-w-full mx-auto"
            alt="foto Citra"
          />
        </div>
      </aside>
    </div>
  );
}
