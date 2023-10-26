import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Intro/>
      <Services/>
      <Hero/>
    </main>
  );
};

export default App;
