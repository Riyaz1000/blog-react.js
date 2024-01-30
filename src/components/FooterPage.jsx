import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    // <footer className="p-3 bg-darkBlue text-gray-200 text-center">
    //   <p>
    //     &copy; 2024 All Rights Reserved | Developed by&nbsp;
    //     <a
    //       href="https://github.com/danielace1"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="hover:underline"
    //     >
    //       Riyaz
    //     </a>
    //   </p>
    // </footer>
    <footer className="p-6  bg-zinc-950 text-white sm:w-full ">
      <div className="flex ">
        <p className="text-white font-Viga font-bold text-3xl ml-14">
          {" "}
          BlogSpot
        </p>

        <div className="flex  mx-[800px] space-x-24">
          <div>
            <ul>
              <li className="font-extrabold text-lg">COMPANY</li>

              <li className="font-semibold text-md mx-2 mt-2">Terms</li>

              <li className="font-semibold text-md mx-2 mt-2">About</li>
            </ul>
          </div>

          {/* <div>
            <ul>
              <li>LEGAL</li>
              <li>PRIVACY & POLICY</li>
              <li>TERMS & CONDITION</li>
            </ul>
          </div> */}

          <div>
            <ul>
              <li>
                <Link to="/" className="font-extrabold text-lg">
                  {" "}
                  RESOURCE
                </Link>{" "}
              </li>

              <li>
                {" "}
                <Link to="/" className="font-semibold text-md mx-2 mt-2 ">
                  Home{" "}
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/about" className="font-semibold text-md mx-2 mt-2 ">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-semibold font-Viga text-center mt-1 ">
        copyright © , 2024{" "}
        <span className="font-semibold font-Viga text-orange-300">Riyaz</span> ,
        All rights reserved
      </div>
    </footer>
  );
};

export default FooterPage;
