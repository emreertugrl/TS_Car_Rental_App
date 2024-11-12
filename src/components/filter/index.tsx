import SearchBar from "../searchBar";
import SelectFilter from "./SelectFilter";
import YearFilter from "./YearFilter";

const Filter = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
        <p>Beğenebileceğiniz arabaları keşfet</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <SelectFilter />
          <YearFilter />
        </div>
      </div>
    </div>
  );
};

export default Filter;