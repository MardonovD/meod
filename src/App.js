import "./style/main.scss";
import Header from "./components/Header";
import HeaderCount from "./components/HeaderCount";
import MainSection from "./components/MainSection";
import DolzarbNew from "./components/DolzarbNew";
import Intervyu from "./components/Intervyu";
import SurishTiruv from "./components/SurishTiruv";
import Maqolalar from "./components/Maqolalar";
import Busines from "./components/Busines";
import Footer from "./components/Footer";
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
      <Busines />
      <Footer />
    </div>
  );
}

export default App;
