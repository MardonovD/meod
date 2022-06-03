import "./style/main.scss";
import Header from "./components/Header";
import HeaderCount from "./components/HeaderCount";
import MainSection from "./components/MainSection";
import DolzarbNew from "./components/DolzarbNew";
import Intervyu from "./components/Intervyu";
import SurishTiruv from "./components/SurishTiruv";
import Maqolalar from "./components/Maqolalar";
function App() {
  return (
    <div className="app">
      <Header />
      <HeaderCount />
      <MainSection />
      <DolzarbNew />
      <Intervyu />
      <SurishTiruv />
      <Maqolalar />
    </div>
  );
}

export default App;
