import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Intro/>
      <Services/>
    </main>
  );
};

export default App;
