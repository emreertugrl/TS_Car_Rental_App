import Filter from "./components/filter";
import Header from "./components/header";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="bg-[rgb(23,23,23)] text-white min-h-screen">
      <Header />
      <Hero />

      <Filter />
    </div>
  );
};

export default App;
