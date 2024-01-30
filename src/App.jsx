// import TheNavbar from "./components/TheNavbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
// import Footer from "./layouts/FooterPage";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <div className="bg-gray-400 min-h-screen">
      {/* <TheNavbar /> */}
      <FooterPage />

      <div className="bg-white max-w-xl mx-auto border rounded p-10 mt-5">
        <HomePage />
        <ContactPage />
        <AboutPage />
      </div>
    </div>
  );
}

export default App;
