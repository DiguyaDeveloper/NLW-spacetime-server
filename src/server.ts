import cors from '@fastify/cors';
import 'dotenv/config';
import fastify from 'fastify';
import { authRoutes } from './routes/auth';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(memoriesRoutes);
app.register(authRoutes);

app.register(cors, {
  origin: true,
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀🚀 HTTP Server running on https://localhost:3333');
  });
