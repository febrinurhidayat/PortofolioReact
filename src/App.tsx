import NaNvbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ButtonTop from "./component/ButtonTop";
import Sertifikat from "./component/Sertifikat";
import Animasi from "./component/Animasi";

const App = () => {
  return (
    <div>
      <NaNvbar />
      <Hero />
      <Skill />
      <Sertifikat />
      <Project />
      <Contact />
      <Animasi/>
      <Footer />
      <ButtonTop />
    </div>
  );
};

export default App;
