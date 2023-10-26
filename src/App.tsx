import Intro from "./components/Intro/Intro";
import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <main>
      <Header />
      <Intro/>
    </main>
  );
};

export default App;
