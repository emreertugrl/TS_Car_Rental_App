import ReactSelect from "react-select";
import { fuels } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { label } from "framer-motion/client";
const SelectFilter = () => {
  const [params, setParams] = useSearchParams();
  const fuel = params.get("fuel_type");
  const selected = !fuel
    ? fuels[0] //
    : fuels.find((i) => i.value === fuel);
  return (
    <div>
      <ReactSelect
        options={fuels}
        className="text-black min-w-[140px]"
        defaultValue={selected}
        onChange={(e) => {
          params.set("fuel_type", e!.value.toLowerCase());
          setParams(params);
        }}
      />
    </div>
  );
};

export default SelectFilter;
