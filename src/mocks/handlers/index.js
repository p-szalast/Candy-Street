import { candyHandlers } from "./candyHandlers";
import { orderHandlers } from "./orderHandlers";

export const handlers = [...candyHandlers, ...orderHandlers];
