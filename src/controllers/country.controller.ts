import CountryRepository from "../repositories/country.repository.js";
import { Request, Response } from 'express';

export default class CountryController {

  private repository: CountryRepository;

  public constructor(repository: CountryRepository) {
    this.repository = repository;

    this.getCountries = this.getCountries.bind(this);
    this.searchCountryByName = this.searchCountryByName.bind(this);
  }

  getCountries(req: Request, res: Response): Response {
    const countries = this.repository.getAllCountriesRepository();

    return res.status(200).json(countries);
  }

  searchCountryByName(req: Request, res: Response): Response {
    const searchValue = req.params.value;
    const countries = this.repository.searchCountryByNameRepository(searchValue);

    return res.status(200).json(countries);
  }
}
