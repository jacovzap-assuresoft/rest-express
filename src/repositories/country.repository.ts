import { Country } from '../Interfaces/types.js';
import countries from '../config/db.config.js';

export default class CountryRepository {

  public constructor() {

  }

  getAllCountriesRepository (): Array<Country> {
    return countries;
  }

  searchCountryByNameRepository (searchValue: string): Array<Country> {
    return countries.filter((country) => country.name.match(new RegExp(searchValue, 'i')))
  }

}
