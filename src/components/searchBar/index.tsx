import ReactSelect from "react-select";
import { makes } from "./../../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [params, setParams] = useSearchParams();

  const options = useMemo(
    () =>
      makes.map((make) => ({
        value: make,
        label: make,
      })),
    []
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // marka ve model url arama parametresi olarak ekle
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-4">
      <div className="searchbar__item">
        <ReactSelect
          onChange={(e) => setMake(e!.value)}
          className="w-full text-black"
          options={options}
          placeholder="Marka Seçiniz..."
        />
        <button className="ml-3 sm:hidden">
          <img src="/search.svg" className="size-10" alt="" />
        </button>
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          alt=""
          className="absolute ml-4"
          width={25}
        />
        <input
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Örn: Mondeo"
          onChange={(e) => setModel(e.target.value)}
        />
        <button className="ml-3">
          <img src="/search.svg" className="size-10" alt="" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
