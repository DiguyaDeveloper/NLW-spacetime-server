import cors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import 'dotenv/config';
import fastify from 'fastify';
import { resolve } from 'node:path';
import { authRoutes } from './routes/auth';
import { memoriesRoutes } from './routes/memories';
import { uploadRoutes } from './routes/upload';

const app = fastify();

app.register(multipart);

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: 'uploads',
});

app.register(memoriesRoutes);
app.register(authRoutes);
app.register(uploadRoutes);

app.register(fastifyJwt, {
  secret: 'hasduhasuidhvekhbvkujgeoixehjfoiuwf',
});

app.register(cors, {
  origin: true,
});

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀🚀 HTTP Server running on https://localhost:3333');
  });
