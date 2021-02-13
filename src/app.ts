// ライブラリ読み込み
import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use('/', router);

// -------------------------------------------------
//  404
// -------------------------------------------------

app.use((req: Request, res: Response) => {
  res.status(404);
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

app.listen(port);
console.log('listen on port ' + port);
