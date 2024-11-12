import { CarType } from "../../utils/types";
import Button from "../button";
import Info from "./Info";

type Props = {
  car: CarType;
};
const Card = ({ car }: Props) => {
  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        {/* 1500 - 8500 arası sayı */}
        <span className="text-[32px]">
          {Math.round(Math.random() * 7000 + 1500)}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>
      {/* resim alanı */}
      <div className="w-full">
        <img src="/hero.png" className="w-full h-full object-contain" alt="" />
      </div>
      {/* alt kısım */}
      <div className="w-full bg-red-200">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <div className=" hidden group-hover:flex ">
          <Button title="Daha Fazla" designs="w-full py-[25px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
