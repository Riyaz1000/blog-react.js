import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-zinc-800 text-white py-5 px-10 flex items-center justify-between ">
      <h4 className="font-bold text-lg">BlogSpot</h4>
      <ul className="flex space-x-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
