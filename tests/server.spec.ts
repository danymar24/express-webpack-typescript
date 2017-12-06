import { suite, test } from 'mocha-typescript';
import * as chai from 'chai';
import * as sinonjs from 'sinon';

import * as server from "../src/server";

const expect = chai.expect;

@suite('Server unit tests.')
class ServerTests {

    private sandbox: any;

    before() {
        this.sandbox = sinonjs.sandbox.create();
    }

    after() {
        this.sandbox.restore();
    }

    @test('bootstrap method, with a valid ExpressJS application instance, must configure itself.')
    bootstrap_WithValidExpressJSApplication_ConfiguresItself() {
        
        let mockedApplication: any = {
            get: (path: string, callback:any) => { return },
            listen: (port: number, callback: any) => {return }
        };

        let spiedGetMethod: any = this.sandbox.spy(mockedApplication, 'get');
        let spiedListenMethod: any = this.sandbox.spy(mockedApplication, 'listen');

        server.bootstrap(mockedApplication);

        expect(spiedGetMethod.called).to.be.true;
        expect(spiedListenMethod.called).to.be.true;
    }
}