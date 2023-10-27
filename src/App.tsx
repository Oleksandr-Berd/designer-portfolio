import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/MyServices/Services";
import Header from "./layouts/Header/Header";
import Contact from "./components/Contact/Contact";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Intro/>
      <Services/>
      <Hero/>
      <Portfolio/>
      <Contact/>
      <Header/>
    </main>
  );
};

export default App;
