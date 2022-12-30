import { Link } from "react-router-dom";
import { Country } from "./Table";

type Props = {
  country: Country;
};

export default function ItemTable({ country }: Props) {
  const { gini, area, population, name, flags } = country;
  return (
    <Link
      to={`country/${name}`}
      className="grid grid-cols-2 md:grid-cols-4 w-full bg-white px-4 shadow rounded-xl cursor-pointer"
    >
      <div className="h-[73px] inline-flex items-center  gap-[25px]">
        <img
          src={flags.svg}
          alt={name}
          className="w-[50px] object-cover object-center hidden md:block"
        />
        <p className="text-[#124A63] font-medium font-poppins text-base leading-[200%] text-start">
          {name}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-[#124A63] font-medium font-poppins text-base leading-[200%]">
          {population.toLocaleString()}
        </p>
      </div>
      <div className="mt-4 hidden md:block">
        <p className="text-[#124A63] font-medium font-poppins text-base leading-[200%]">
          {population.toLocaleString()}
        </p>
      </div>
      <div className="hidden md:inline-flex items-center gap-2.5">
        {gini && (
          <>
            <div className="w-[133px] h-1.5 bg-[#F2F5F7] relative">
              <span
                className="absolute bg-[#21B6B7] h-full  left-0 rounded"
                style={{ width: `${gini}%` }}
              ></span>
            </div>
            <p className="text-xs leading-6 font-medium text-[#124A63] font-poppins">
              {gini}%
            </p>
          </>
        )}
      </div>
    </Link>
  );
}
