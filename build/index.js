"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var appRouter_1 = require("./appRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['asdgag'] }));
app.use(appRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('listening on port 3000');
});
