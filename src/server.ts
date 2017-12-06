import * as express from 'express';

export function bootstrap(app: express.Application) {
    app.get('/', (req: express.Request, res: express.Response) => {
        res.send({message: 'Hello world!'});
    });
    
    app.listen(3000, () => {
        console.log('Listening for requests on 3000 TCP port.');
    });
}

let app: express.Application = express();
bootstrap(app);