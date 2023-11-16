import { getAllCountriesRepository, searchCountryByNameRepository } from "../repositories/country.repository.js";
import { Request, Response } from 'express';

export const getCountries: (req:Request, res:Response) => Response = (req, res) => {
  return res.status(200).json(getAllCountriesRepository());
}

export const searchCountryByName: (req:Request, res:Response) => Response = (req, res) => {
  const searchValue = req.params.value;
  return res.status(200).json(searchCountryByNameRepository(searchValue));
}
