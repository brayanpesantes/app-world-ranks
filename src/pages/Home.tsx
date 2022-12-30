import { useEffect, useState } from "react";
import { getCountries } from "../api/API";
import InputSearch from "../components/InputSearch";
import Table from "../components/Table";
import DefaultLayout from "../layouts/DefaultLayout";
import { ICountry } from "../types/countries";

export default function Home() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [countriesFilter, setCountriesFilter] = useState<ICountry[]>([]);
  const [text, setText] = useState<string>("");

  const getData = async () => {
    setCountriesFilter(await getCountries());
    setCountries(await getCountries());
  };
  const orderByPopulation = (orderBy: "desc" | "asc") => {
    const order = countriesFilter.sort((a, b) => a.population - b.population);
    if (orderBy === "desc") {
      order.reverse();
    }
    setCountriesFilter([...order]);
  };

  const filterCountries = () => {
    const filterRes = countries.filter((country) =>
      [country.name, country.region, country.subregion].some((prop) =>
        prop.toUpperCase().includes(text.toUpperCase())
      )
    );
    setCountriesFilter(text.trim() ? filterRes : [...countries]);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterCountries();
  }, [text]);

  return (
    <DefaultLayout>
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-3 lg:gap-0 lg:items-center">
        <h2 className="font-base font-poppins font-medium text-[#B3C5CD]">
          Found {countries.length} countries
        </h2>
        <InputSearch text={text} setText={setText} />
      </div>
      <div className="mt-10 w-full">
        <Table
          countries={countriesFilter}
          order={orderByPopulation}
          // orderAsc={orderByPopulationAsc}
        />
      </div>
    </DefaultLayout>
  );
}
