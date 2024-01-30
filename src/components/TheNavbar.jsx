import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-zinc-900 text-white py-5 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between">
      <h4 className="font-bold text-lg mb-4 sm:mb-0">BlogSpot</h4>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <li className="hover:underline hover:mt-1 hover:cursor-pointer hover:text-[#d581b5] hover:underline-offset-4">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:mt-1 hover:underline hover:cursor-pointer hover:text-[#d581b5] hover:underline-offset-4">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:underline hover:mt-1 hover:cursor-pointer hover:text-[#d581b5] hover:underline-offset-4">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
