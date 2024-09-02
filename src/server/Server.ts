import express from "express";

const server = express();

server.get('/teste', (req, res) => {
  return res.send('Olá Dev!');
})

export { server };