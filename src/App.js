import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BackTopBtn from "./Components/BackTopBtn/BackTopBtn";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Footer from "./Components/Home/Footer/Footer";
import Home from "./Components/Home/Home";
import ScrollToTop from "./Components/ScrollToTop/ScrollTotop";

function App() {
  return (
    <div className="overflow">
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/course-details/:id"
          element={<CourseDetails></CourseDetails>}
        ></Route>
      </Routes>
      <BackTopBtn></BackTopBtn>
      <Footer></Footer>
    </div>
  );
}

export default App;
