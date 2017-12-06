"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
function bootstrap(app) {
    app.get('/', (req, res) => {
        res.send({ message: 'Hello world!' });
    });
    app.listen(3000, () => {
        console.log('Listening for requests on 3000 TCP port.');
    });
}
exports.bootstrap = bootstrap;
let app = express();
bootstrap(app);
