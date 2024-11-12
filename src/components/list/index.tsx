import { useEffect, useState } from "react";
import { fetchCars } from "./../../utils/fetchCars";
import { CarType } from "../../utils/types";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  //api'dan verileri al
  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch((err) => setIsError(true));
  }, []);

  // 1- cars null ise > Henüz Apı'den cevap gelmemiştir
  // 2- isError true ise > Apı'den hatalı cevap gelmiştir
  // 3- cars [] ise > Aranılan kriterde araç yoktur.
  // 4- cars dolu[] ise > Apı'den veriler gelmiştir.
  return (
    <div>
      {!cars ? (
        <p>Yükleniyor</p>
      ) : isError ? (
        <p>Hata !!</p>
      ) : cars.length < 1 ? (
        <p>Aranılan Kriter</p>
      ) : (
        cars.length >= 1 && <section>Veriler Geldi</section>
      )}
    </div>
  );
};

export default List;
