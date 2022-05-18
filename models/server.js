const express = require('express');
const cors = require('cors');
const db = require('../database/connection');
const helmet = require("helmet");

class Server { 

    constructor() {
        this.port = 3000;
        this.app = express();
        this.paths = {
            costumer: '/api/costumer',
        };

        this.middlewares();
        this.routes();
        this.database();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.costumer, require('../routes/customer'));
    }

    async database() {
        try {
            await db.authenticate();
            console.log('Database online');
            
        } catch (error) {
            throw new Error(error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;