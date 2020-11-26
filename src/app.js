import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json); // app is ready to reaceive requests
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
