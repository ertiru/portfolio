import "./App.css";
import Header from "../src/components/Header/Header";
import Banner from "./components/Banner/Banner";
import MySkills from "./components/MySkills/MySkills";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import FAQ from "./components/FAQ/FAQ";
import ContactMe from "./components/ContactMe/ContactMe";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Banner />
        <MySkills />
        <AboutMe />
        <Projects />
        <FAQ />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
