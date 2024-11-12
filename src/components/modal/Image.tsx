import { CarType } from "../../utils/types";

const Image = ({ car }: { car: CarType }) => {
  console.log(Object.entries(car));
  return (
    <div className="flex-1 flex-col gap-3">
      {/* Büyük Resim */}
      <div className="w-full h-40 bg-pattern bg-center rounded-lg">
        <img src="hero.png" alt="" className="h-full mx-auto object-contain" />
      </div>
      {/* Küçük Resim */}
      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src="hero.png"
            alt=""
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src="hero.png"
            alt=""
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
        <div className="rounded flex-1 flex  relative h-24 bg-primary-blue-100">
          <img
            src="hero.png"
            alt=""
            className="mx-auto object-contain min-w-[146px]:"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
