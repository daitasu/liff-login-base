// ライブラリ読み込み
import express, { Request, Response } from 'express';
import router from './routes';
import session from 'express-session';
import views from './routes/views';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'liff-login',
    saveUninitialized: true,
    resave: true,
  })
);

const port = process.env.PORT || 8000;

app.use('/api/v1', router);
app.use('/views', views);

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
