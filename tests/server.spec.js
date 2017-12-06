"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const chai = require("chai");
const sinonjs = require("sinon");
const server = require("../src/server");
const expect = chai.expect;
let ServerTests = class ServerTests {
    before() {
        this.sandbox = sinonjs.sandbox.create();
    }
    after() {
        this.sandbox.restore();
    }
    bootstrap_WithValidExpressJSApplication_ConfiguresItself() {
        let mockedApplication = {
            get: (path, callback) => { return; },
            listen: (port, callback) => { return; }
        };
        let spiedGetMethod = this.sandbox.spy(mockedApplication, 'get');
        let spiedListenMethod = this.sandbox.spy(mockedApplication, 'listen');
        server.bootstrap(mockedApplication);
        expect(spiedGetMethod.called).to.be.true;
        expect(spiedListenMethod.called).to.be.true;
    }
};
__decorate([
    mocha_typescript_1.test('bootstrap method, with a valid ExpressJS application instance, must configure itself.')
], ServerTests.prototype, "bootstrap_WithValidExpressJSApplication_ConfiguresItself", null);
ServerTests = __decorate([
    mocha_typescript_1.suite('Server unit tests.')
], ServerTests);
