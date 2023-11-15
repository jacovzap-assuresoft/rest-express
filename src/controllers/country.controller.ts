import { Country } from '../Interfaces/types.js';
import { getAllCountriesRepository } from "../repositories/country.repository.js";

export const getCountries: () => Array<Country> = () => {
    return getAllCountriesRepository();
}

export const searchCountryByName: (searchValue: string) => Array<Country> = (searchValue: string) => {
    return searchCountryByName(searchValue);
}
