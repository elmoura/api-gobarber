import 'express-async-errors';
import express from 'express';
import 'reflect-metadata';

import errorHandler from './middlewares/errorHandler';
import uploadConfig from './config/upload';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(errorHandler);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`🪐 Server running at port ${PORT}`);
});
