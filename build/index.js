"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 6000;
app.use(bodyParser.json());
const start = () => {
    try {
        app.get('/', (req, res) => {
            return res.send('Server is working on TypeScript');
        });
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    }
    catch (e) {
        console.log(e);
    }
};
start();
