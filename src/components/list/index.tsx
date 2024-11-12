import { useEffect, useState } from "react";
import { fetchCars } from "./../../utils/fetchCars";
import { CarType } from "../../utils/types";
import Warning from "./Warning";
import Card from "./Card";

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
    <div className="padding-x max-width">
      {!cars ? (
        <Warning>
          <p>Yükleniyor...</p>
        </Warning>
      ) : isError ? (
        <Warning>Bir hata oluştu</Warning>
      ) : cars.length < 1 ? (
        <Warning>Aranılan kriterlere uygun sonuç bulunamadı</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
