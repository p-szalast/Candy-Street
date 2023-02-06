import { rest } from "msw";

import { BASE_URL } from "../../common/config";

import { mockedOrders } from "../test-data";

export const orderHandlers = [
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedOrders));
  }),
];
