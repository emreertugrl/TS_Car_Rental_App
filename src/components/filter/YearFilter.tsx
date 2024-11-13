import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const YearFilter = () => {
  const [year, setYear] = useState<string>("");
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // year parametresi olarak ekle
    params.set("year", year);
    setParams(params);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center bg-gray-500 rounded"
    >
      <input
        type="number"
        className="w-24 py-[6px] px-2 rounded shadow text-black"
        placeholder="ör:2023"
        onChange={(e) => setYear(e.target.value)}
      />
      <button>
        <img src="right-arrow.svg" alt="" />
      </button>
    </form>
  );
};

export default YearFilter;
