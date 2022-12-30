import { ICountry } from "../types/countries";

export const URL = "https://restcountries.com/v2";

export async function getCountries(): Promise<ICountry[]> {
  return await (await fetch(`${URL}/all`)).json();
}

export async function getCountryName(
  name: string | undefined
): Promise<ICountry[]> {
  return await (await fetch(`${URL}/name/${name}?fullText=true`)).json();
}
