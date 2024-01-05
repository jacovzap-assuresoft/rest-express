import { Country } from "../Interfaces/types";
import CountryRepository from "../repositories/country.repository";
import { Request, Response } from 'express';


export default class CountryController {

  private repository: CountryRepository;

  public constructor(repository: CountryRepository) {
    this.repository = repository;

    this.getCountries = this.getCountries.bind(this);
    this.searchCountryByName = this.searchCountryByName.bind(this);
    this.addCountry = this.addCountry.bind(this);
  }

  getCountries(req: Request, res: Response): Response {
    const countries = this.repository.getAllCountries();

    return res.status(200).json(countries);
  }

  searchCountryByName(req: Request, res: Response): Response {
    const searchValue = req.params.value;
    const countries = this.repository.searchCountryByName(searchValue);

    return res.status(200).json(countries);
  }

  addCountry(req: Request, res: Response): Response {
    const country = req.body as Country
    const addedCountry = this.repository.addCountry(country);

    return res.status(201).json(addedCountry);
  }
}
