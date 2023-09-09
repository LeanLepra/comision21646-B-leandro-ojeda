import express from 'express';
import { foroRouter } from './src/routes/foro.routes.js';
import { startDb } from './src/config/database.js';

const app = express();

const port = 3000;

app.use('/', foroRouter);

app.get('/', (req, res) => {
    res.send('Todo listo')
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
    startDb()
});
