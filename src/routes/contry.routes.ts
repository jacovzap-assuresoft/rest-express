import { Router } from "express";

import { getCountries, searchCountryByName } from "../controllers/country.controller.js";

const router = Router();

router.get('/all', getCountries);
router.get('/find-name/:value', searchCountryByName);

export default router;
