import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/For Home Page/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
