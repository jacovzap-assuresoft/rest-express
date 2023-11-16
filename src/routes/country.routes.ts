import { Router } from "express";

import CountryController from "../controllers/country.controller";

export default class CountryRouter {
    private controller: CountryController;
    private router = Router();

    constructor(controller: CountryController) {
        this.controller = controller;

        this.router.get('/all', this.controller.getCountries);
        this.router.get('/find-name/:value', this.controller.searchCountryByName);
        this.router.post('/add', this.controller.addCountry);

        this.getRouter = this.getRouter.bind(this);
    }

    getRouter(): Router {
        return this.router;
    }
}
