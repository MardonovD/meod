import "./style/main.scss";
import Header from "./components/Header";
import HeaderCount from "./components/HeaderCount";
import MainSection from "./components/MainSection";
import Aside from "./components/Aside";
function App() {
  return (
    <div className="app">
      <Header />
      <HeaderCount />
      <MainSection />
    </div>
  );
}

export default App;
