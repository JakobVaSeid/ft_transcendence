import Fastify from 'fastify';
import websocket from '@fastify/websocket';

// ---------- AUTH SERVICE ----------
const auth = Fastify({ logger: true });
auth.get('/health', () => ({ ok: true, service: 'auth' }));
auth.listen({ port: 3000 });

// ---------- USER SERVICE ----------
const user = Fastify({ logger: true });
user.get('/health', () => ({ ok: true, service: 'user' }));
user.listen({ port: 3001 });

// ---------- GAME SERVICE (mit WS) ----------
const game = Fastify({ logger: true });
await game.register(websocket);

game.get('/health', () => ({ ok: true, service: 'game' }));

game.get('/ws', { websocket: true }, (conn, req) => {
  conn.socket.on('message', msg => {
    game.log.info(`WS-Nachricht erhalten: ${msg}`);
    conn.socket.send(`Echo vom Game-Server: ${msg}`);
  });
});

game.listen({ port: 4000 });
