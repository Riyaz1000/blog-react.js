import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";
import FooterPage from "../components/FooterPage";

function GuestLayout() {
  return (
    <div className="bg-white min-h-screen">
      <TheNavbar />

      <div className="bg-gray-00   rounded m-6 p-10 mt-5">
        <Outlet />
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
export default GuestLayout;
