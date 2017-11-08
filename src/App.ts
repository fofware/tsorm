import * as path from "path";
import * as express from "express";
//import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as hbs from "express-handlebars";

import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.express.engine("hbs", hbs({defaultLayout: "layout", extname: "hbs"}));
    this.express.set("view engine", "hbs");
    this.middleware();
/*
    createConnection()
    .then( async connection => {
      console.log("conexion base de datos ok");
      this.routes();
    })
    .catch(error => console.log(error));
*/
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
//    this.express.use(logger("dev"));
//    this.express.set("views", path.join(__dirname, "views"));
//    this.express.use("/css", express.static(__dirname + "/css"));
//    this.express.use("/images", express.static("src/images"));
//    this.express.use("/js", express.static("/src/js"));
//    this.express.use("/public", express.static(__dirname + "/public"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we"ve got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    const router = express.Router();
    // placeholder route handler
    router.get("/", (req, res, next) => {
/*
      res.json({
        message: "Hello World!"
      });
*/
      res.status(200).render("index");
    });
    router.get("/login", (req, res, next) => {
      res.status(200).render("login");
    });
    router.get("/register", (req, res, next) => {
      res.status(200).render("register");
    });

    this.express.use("/", router);
    // 		this.express.use("/api/v1/heroes", HeroRouter);
  }
}
export default new App().express;