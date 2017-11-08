import "reflect-metadata";
import {createConnection} from "typeorm";
import {WebSocket, EventSource} from "faye-websocket";


//import * as express from "express";
//import * as bodyParser from "body-parser";
//import {Request, Response} from "express";
//import {userRoutes} from "./routes/User";
//import {User} from "./entity/User";
//import App from "./App";

//createConnection().then(async connection => {
//    App.listen(3000)
    // create express app
/*
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    userRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
//                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
                result.then((result) => {
                    if (result !== null && result !== undefined){
                        console.log(result);
                        res.send(result);
                    } else {
                        console.log("undefined")
//                        undefined;
                    }
                });
            } else if (result !== null && result !== undefined) {
                console.log(result);
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
*/
/*
    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));
*/
//    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
    
//}).catch(error => console.log(error));


import * as http from "http";
import * as debug from "debug";

import App from "./App";

const port = normalizePort(process.env.PORT || 3000);
const server = http.createServer(App);
debug("ts-express:server");
createConnection().then(async connection => {
    App.set("port", port);
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
    server.on('upgrade', (request, socket, body) => {
        if (WebSocket.isWebSocket(request)) {
          let ws = new WebSocket.WebSocket (request, socket, body);
          console.log("Nueva conexion");
          console.log(ws);
            
          ws.on('message', function(event) {
              console.info(event);
            ws.send(event.data);
          });
          
          ws.on('close', function(event) {
            console.log('close', event.code, event.reason);
            ws = null;
          });
        }
    });
    //    App.listen(3000)
    // create express app
/*
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    userRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
//                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
                result.then((result) => {
                    if (result !== null && result !== undefined){
                        console.log(result);
                        res.send(result);
                    } else {
                        console.log("undefined")
//                        undefined;
                    }
                });
            } else if (result !== null && result !== undefined) {
                console.log(result);
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
*/
/*
    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));
*/
//    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
    
}).catch(error => console.log(error));


function normalizePort(val: number|string): number|string|boolean {
  const port: number = (typeof val === "string") ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") throw error;
  const bind: string = (typeof port === "string") ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onRequest(param): void {
    console.log("Request");
}    
function onListening(): void {
  const addr = server.address();
  const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  console.log(`Listening on ${bind}`);
}