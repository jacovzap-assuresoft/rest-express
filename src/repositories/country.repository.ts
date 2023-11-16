import { Country } from '../Interfaces/types';
import countries from '../config/db.config';

export default class CountryRepository {

  public constructor() {

  }

  getAllCountries (): Array<Country> {
    return countries;
  }

  searchCountryByName (searchValue: string): Array<Country> {
    return countries.filter((country) => country.name.match(new RegExp(searchValue, 'i')))
  }

  addCountry (country: Country): Country {
    countries.push(country);
    return country;
  }

}
