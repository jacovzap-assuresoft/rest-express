import { describe } from "node:test";
import request from 'supertest';

const baseURL = "http://localhost:3000"

describe("GET /countries", () => {
  it('Should return 200', async () => {
    const response = await request(baseURL).get('/countries/all');

    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  })

  it('Should return countries', async () => {
    const response = await request(baseURL).get('/countries/all');

    expect(response.statusCode).toBe(200);
    expect(response.body.length >= 1).toBe(true);
  })

  it('Should return Bolivia', async () => {
    const response = await request(baseURL).get('/countries/find-name/Bolivia');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  })
});
