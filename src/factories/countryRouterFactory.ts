import CountryController from "../controllers/country.controller.js";
import CountryRepository from "../repositories/country.repository.js";
import CountryRouter from "../routes/country.routes.js";

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


