import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="bg-gray-400 min-h-screen">
      <TheNavbar />

      <div className="bg-gray-100  border rounded m-6 p-10 mt-5">
        <h1></h1>
        {/* <HomePage />
        <ContactPage />
        <AboutPage /> */}
        <Outlet />
      </div>
    </div>
  );
};
export default GuestLayout;
