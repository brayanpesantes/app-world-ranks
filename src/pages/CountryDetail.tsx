import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryName, URL } from "../api/API";
import { ItemDetail } from "../components/ItemDetail";
import DefaultLayout from "../layouts/DefaultLayout";
import { Currency, ICountry, Language } from "../types/countries";
type Borders = {
  name: string;
  flag: string;
};
export default function CountryDetail() {
  const params = useParams();
  const { name } = params;
  const [country, setCountry] = useState<ICountry>({} as ICountry);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [countriesBorders, setCountriesBorders] = useState<Borders[]>([]);

  const geData = async () => {
    setIsLoading(true);
    const data: ICountry[] = await getCountryName(name);
    setCountry(data[0]);
    const res = await getBordersCountries(data[0].borders);
    setCountriesBorders(res);
    setIsLoading(false);
  };

  useEffect(() => {
    geData();
  }, []);

  const transformLanguages = (language: string | Language[]) => {
    if (typeof language === "string" || typeof language === "undefined")
      return language;
    else {
      return language.map((l) => l.name).join(", ");
    }
  };
  const formantCurrency = (currency: Currency[] | undefined) => {
    if (typeof currency === "undefined") return "";
    return currency.map((c) => `${c.name} (${c.symbol})`).toString();
  };

  const getBordersCountries = async (
    borders: string[] | undefined
  ): Promise<Borders[]> => {
    if (typeof borders === "undefined" || borders.length <= 0) return [];
    try {
      const url = `${URL}/alpha?codes=${borders?.join(",")}`;
      const res = await fetch(url);
      const data: Borders[] = await res.json();
      return data.map(({ name, flag }) => ({ name, flag }));
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <DefaultLayout>
      {isLoading ? (
        "cargando..."
      ) : (
        <>
          <section className="flex flex-col lg:flex-row gap-[51px] justify-start pb-10">
            <div className="w-full lg:w-[352px] bg-white p-2 lg:p-8 lg:h-[462.6px]">
              <img
                src={country?.flags?.svg}
                alt={country!.name}
                className="h-[231.04px] md:w-full md:h-[350px] lg:h-[215.08px]"
              />
              <div className="mt-6">
                <h3 className="text-[#333333] font-semibold font-poppins text-[32px] leading-8 text-center">
                  {country.name}
                </h3>
                <p className="text-center text-[#124A63] text-base font-normal">
                  {country.region}
                </p>
              </div>
              <div className="flex justify-between mt-10 font-poppins ">
                <div className="space-y-3">
                  <p className="text-[#124A63] font-normal text-base">
                    {country!.population?.toLocaleString()}
                  </p>
                  <p className="text-sm font-normal text-[#B9C9D1]">
                    Population
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[#124A63] font-normal text-base">
                    {country!.area?.toLocaleString()}
                  </p>
                  <p className="text-sm font-normal text-[#B9C9D1]">
                    Area (km)
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex-1 bg-white w-full shadow font-poppins">
              <h3 className="px-4 lg:px-10 text-black text-lg leading-[200%] font-medium mt-[30px]">
                Details
              </h3>
              <ul className="divide-y divide-[#E0E0E0">
                <ItemDetail title={"Capital"} label={country?.capital} />
                <ItemDetail title={"Subregion"} label={country?.subregion} />
                <ItemDetail
                  title={"Languages"}
                  label={transformLanguages(country.languages)}
                />
                <ItemDetail
                  title={"Currencies"}
                  label={formantCurrency(country?.currencies)}
                />
                <ItemDetail title={"Native name"} label={country?.nativeName} />
                {/* <ItemDetail title={"Gini"} label={country?.nativeName} /> */}

                <li className="px-10 py-5 flex justify-between">
                  <h4 className="text-[#B9C9D1] font-normal text-sm leading-[200%]">
                    Gini
                  </h4>
                  <div className="flex gap-2.5 items-center">
                    {country?.gini && (
                      <>
                        <div className="w-[133px] h-1.5 bg-[#F2F5F7] relative rounded">
                          <span
                            className="absolute left-0 h-full rounded bg-[#21B6B7] "
                            style={{ width: `${country?.gini}%` }}
                          ></span>
                        </div>
                        <p className="text-[#124A63] font-normal text-sm leading-[200%]">
                          {country.gini}%
                        </p>
                      </>
                    )}
                  </div>
                </li>
                <li className="px-10 py-5">
                  <h4 className="text-[#B9C9D1] font-normal text-sm leading-[200%]">
                    Neighbouring Countries
                  </h4>
                  <div className="flex gap-7 flex-wrap mt-6">
                    {countriesBorders.map((cb, idx) => (
                      <div key={idx}>
                        <img
                          src={cb.flag}
                          alt=""
                          className="w-20 h-11 object-cover"
                        />
                        <p className="mt-1.5 font-normal text-xs text-[#124A63] leading-6">
                          {cb.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </>
      )}
    </DefaultLayout>
  );
}
