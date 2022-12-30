export interface ICountry {
  name: string;
  population: number;
  area?: number;
  region: Region;
  capital?: string;
  subregion: string;
  languages: Language[];
  nativeName: string;
  gini?: number;
  flags: Flags;
  borders?: string[];
  currencies?: Currency[];
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  AntarcticOcean = "Antarctic Ocean",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
  Polar = "Polar",
}
export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}
export interface Flags {
  png: string;
  svg: string;
}
