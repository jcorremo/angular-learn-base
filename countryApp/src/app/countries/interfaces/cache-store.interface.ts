import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermCountry,
  byCountry: TermCountry,
  byRegion: TermRegion,
}

export interface TermRegion {
  term?: Region;
  countries: Country[];
}

export interface TermCountry {
  term: string;
  countries: Country[];
}
