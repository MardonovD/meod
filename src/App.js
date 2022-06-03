import "./style/main.scss";
import Header from "./components/Header";
import HeaderCount from "./components/HeaderCount";
import MainSection from "./components/MainSection";
import DolzarbNew from "./components/DolzarbNew";
function App() {
  return (
    <div className="app">
      <Header />
      <HeaderCount />
      <MainSection />
      <DolzarbNew />
    </div>
  );
}

export default App;
