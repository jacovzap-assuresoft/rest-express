import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import countryRouter from './routes/country.routes.js'

const port = 3000;
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

const cookieDurationSeg = 30;

app.post('/', (req: Request, res: Response) => {
  try {
    res.cookie('name', "Default name thingy", { maxAge: 1000 * cookieDurationSeg, httpOnly: true });
    return res.send('Whatever');
  } catch (error) {
    return res.status(500).json({ message: error.message, trace: error.stack})
  }
});

app.post('/set-name', (req: Request, res: Response) => {
  try {
    const name = req.body?.name;
    if (name === undefined) {
      return res.status(400).json({ error: "No name found in body"});
    }
    return res.cookie('name', name, { maxAge: 1000 * cookieDurationSeg, httpOnly: true }).send('Name has been set in cookie');
  } catch (error) {
    return res.status(500).json({ message: error.message, trace: error.stack})
  }
});

app.get('/cookie', (req: Request, res: Response) => {
  try {
    if (req.cookies.name !== undefined) {
      return res.send(`Cookie site for ${req.cookies.name}`);
    }
    return res.status(401).send('Cookie site denied no cookie found')
  } catch (error) {
    return res.status(500).json({ message: error.message, trace: error.stack})
  }
});

app.post('/end-cookie', (req: Request, res: Response) => {
  try {
    res.clearCookie('name');
    return res.status(200).json({ message: 'Cookie deleted'})
  } catch (error) {
    return res.status(500).json({ message: error.message, trace: error.stack})
  }
});


app.use('/countries', countryRouter);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
