import { Router } from "express";

import { getCountries } from "../controllers/country.controller.js";

const router = Router();

router.get('/all', getCountries);
router.get('/find-name/:value');

export default router;
