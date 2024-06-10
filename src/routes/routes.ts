import { Router } from "express";

// Routers
import productsRouter from "./product.router";
import cartsRouter from "./cart.router";
import sessionsRouter from "./session.router";
import viewsRouter from "./view.router";
import mockingRouter from "./mocking.router";
import loggerRouter from "./logger.router";

import {
  apiRoute,
  productsRoute,
  cartsRoute,
  sessionsRoute,
} from "../utils/routes";

const routes = Router();

routes.use(apiRoute + productsRoute, productsRouter); // API Products
routes.use(apiRoute + cartsRoute, cartsRouter); // API Carts
routes.use(apiRoute + sessionsRoute, sessionsRouter); // API Sessions
routes.use(mockingRouter); // Mocking
routes.use(loggerRouter);
routes.use(viewsRouter); // Views

export default routes;
