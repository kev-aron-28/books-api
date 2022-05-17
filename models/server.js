const express = require('express');
const cors = require('cors');
const db = require('../database/connection');

class Server { 

    constructor() {
        this.port = 3000;
        this.app = express();
        this.paths = {
            actor: '/api/actor',
            category: '/api/category'
        };

        this.middlewares();
        this.routes();
        this.database()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.actor, require('../routes/actor'));
        this.app.use(this.paths.category, require('../routes/category'))
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