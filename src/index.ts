import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import CountryRouterFactory from './factories/countryRouterFactory.js';

const port = 3000;
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());


const routerFactory = new CountryRouterFactory();
const countryRouter = routerFactory.createContryRouterJsonFile();
app.use('/countries', countryRouter.getRouter());

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
