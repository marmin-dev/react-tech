require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';

//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

//포트가 지정되어 있지 않다면 4000번 포트 사용
const port = PORT || 4000;
app.listen(4000, () => {
  console.log('Listening to port %d', port);
});
