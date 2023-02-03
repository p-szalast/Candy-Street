import { rest } from "msw";

import { BASE_URL } from "../../common/config";

import { mockedSweets } from "../../common/test-data";

export const candyHandlers = [
  rest.get(`${BASE_URL}/candies`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedSweets));
  }),
  //other handlers
];
