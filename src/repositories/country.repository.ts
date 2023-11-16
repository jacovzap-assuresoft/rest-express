import { Country } from '../Interfaces/types.js';
import countries from '../config/db.config.js';

export const getAllCountriesRepository: () => Array<Country> = () => {
  return countries;
}

export const searchCountryByNameRepository: (searchValue: string) => Array<Country> = (searchValue: string) => {
  return countries.filter((country) => country.name.match(new RegExp(searchValue, 'i')))
}
