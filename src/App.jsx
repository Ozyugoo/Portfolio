import Header from "./components/Layout/header/Header";
import Main from "./components/Layout/main/Main";
import Footer from "./components/Layout/footer/Footer";
import "../src/index.css";

function App() {
  return (
    <div className="container">
      <section className="container-box">
        <Header />
        <Main />
        <Footer />
      </section>
    </div>
  );
}

export default App;
