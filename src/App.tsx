import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/For Home Page/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-svh">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
