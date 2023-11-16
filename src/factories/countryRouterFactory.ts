import CountryController from "../controllers/country.controller";
import CountryRepository from "../repositories/country.repository";
import CountryRouter from "../routes/country.routes";

export default class CountryRouterFactory {

  public constructor() {
  }

  public createContryRouterJsonFile() {
    const repository = new CountryRepository();
    const controller = new CountryController(repository);
    const router = new CountryRouter(controller);

    return router;
  }
}


