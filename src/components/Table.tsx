import { ICountry } from "../types/countries";
import { IconChevronDown, IconChevronUp } from "./Icon";
import ItemTable from "./ItemTable";

export type Country = Pick<
  ICountry,
  "name" | "area" | "population" | "gini" | "flags"
>;
type Props = {
  countries: Country[];
  order: (orderBy: "desc" | "asc") => void;
};
function Table({ countries, order }: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <button className="font-poppins font-normal text-base leading-[200%] text-[#B9C9D1]">
          Name
        </button>
        <button className="font-poppins font-normal text-base leading-[200%] text-[#B9C9D1] flex items-center gap-1.5 justify-center">
          Population
          <div className="flex">
            <IconChevronDown onClick={() => order("asc")} />
            <IconChevronUp onClick={() => order("desc")} />
          </div>
        </button>
        <button className="font-poppins font-normal text-base leading-[200%] text-[#B9C9D1] hidden md:block">
          Area (Km)
        </button>
        <button className="font-poppins font-normal text-base leading-[200%] text-[#B9C9D1] hidden md:block">
          Gini
        </button>
      </div>
      <div className="w-full text-center flex flex-col gap-5">
        {countries.map((country, idx) => (
          <ItemTable key={idx} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Table;
