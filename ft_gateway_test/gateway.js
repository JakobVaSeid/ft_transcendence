import Fastify from 'fastify';
import proxy from '@fastify/http-proxy';

const fastify = Fastify({ logger: true });

// REST: auth
fastify.register(proxy, {
  upstream: 'http://localhost:3000',
  prefix: '/api/auth',
  rewritePrefix: '/'
});

// REST: user
fastify.register(proxy, {
  upstream: 'http://localhost:3001',
  prefix: '/api/user',
  rewritePrefix: '/'
});

// WS: game (direkter Proxy, kein NGINX nötig)
fastify.register(proxy, {
  upstream: 'http://localhost:4000',
  prefix: '/ws',
  rewritePrefix: '/ws',
  websocket: true
});

fastify.get('/api/health', () => ({ ok: true, service: 'gateway' }));

fastify.listen({ port: 8080 });
