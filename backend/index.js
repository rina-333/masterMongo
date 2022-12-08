/* eslint-disable no-console */
// import ServerApp from './src/configs/server.js';
import express from 'express';
import cors from 'cors';
import db from './src/configs/database.js';
import { createServer } from 'http';
// import seeder from './src/configs/seeder.js';

// const server = new ServerApp();

// const express = require( 'express' )
const app = express();
const httpServer = createServer(app);

app.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(express.json({
  limit: '50mb',
}));

app.use(express.urlencoded({
  limit: '50mb',
  extended: true,
}));

const startServer = async (start) => {
  httpServer.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on ${process.env.APP_URL}:${process.env.APP_PORT}`);
  });
}

const stopServer = async (stop) => {
  this.httpServer.close();
}

db.connection.on('error', (error) => {
  console.log(`Error connecting to database: ${error}`);
  console.log('Please restart the server');
});


db.connection.once('open', async () => {
  // await seeder();
  await startServer();
});
