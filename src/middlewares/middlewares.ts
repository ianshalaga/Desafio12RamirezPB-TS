/** External */
import express, { Router } from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import cors from "cors";
// Config
import { dbURI } from "../config/mongoDb.config";
import initializePassport from "../config/passport.config";
import config from "../config/env.config";
// Middlewares
import errorHandler from "./errorHandler";
import addLogger from "./logger";
// Utils
import { rootPath } from "../utils/paths";

const middlewares = Router();

middlewares.use(express.urlencoded({ extended: true })); // Complex URLs format mapping
middlewares.use(express.static(`${rootPath}/public`)); // Serves static files from public folder
middlewares.use(express.json()); // Format JSON requests to JavaScript Object format (POST / PUT)

middlewares.use(cookieParser(config.cookiesSecret)); // Cookies

middlewares.use(
  session({
    store: MongoStore.create({
      mongoUrl: dbURI,
      ttl: 3600,
    }),
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
); // Sessions

// Passport
initializePassport();
middlewares.use(passport.initialize());
middlewares.use(passport.session());

middlewares.use(cors()); // Cors

middlewares.use(errorHandler); // Errors handling

middlewares.use(addLogger); // Logger

export default middlewares;
