import Filter from "../components/filter";
import Header from "../components/header";
import Hero from "../components/hero";
import List from "../components/list";

const Main = () => {
  return (
    <div className="bg-[rgb(23,23,23)] text-white min-h-screen">
      <Header />
      <Hero />
      <Filter />
      <List />
    </div>
  );
};

export default Main;
