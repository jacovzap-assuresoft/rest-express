import { describe } from "node:test";
import request from 'supertest';

import { Country } from "../Interfaces/types";
import app from '../index';

describe("GET /countries", () => {
  it('Should return 200', async () => {
    const response = await request(app).get('/countries/all');

    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  })

  it('Should return countries', async () => {
    const response = await request(app).get('/countries/all');

    expect(response.statusCode).toBe(200);
    expect(response.body.length >= 1).toBe(true);
  })

  it('Should return Bolivia', async () => {
    const response = await request(app).get('/countries/find-name/Bolivia');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  })

  it('Should add a country', async () => {
    const countryToAdd: Country = {
      name: 'mock',
      code: 'mk'
    }
    const response = await request(app).post('/countries/add').send(countryToAdd);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(countryToAdd);
  })
});
