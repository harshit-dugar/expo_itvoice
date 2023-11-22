import Countdown from "./components/Countdown";
import Footer from "./components/footer/Footer";
import Header from "./components/nav/Header";

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center">
        <div className="flex justify-center m-8">
          <p className="sm:text-3xl text-lg font-bold">We are coming soon</p>
        </div>
        <Countdown />
      </section>
      <Footer />
    </>
  );
}

export default App;
