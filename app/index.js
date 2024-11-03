require('dotenv').config();
require('./database/db').connectDB();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');
const { Server: SocketServer } = require("socket.io");
const http = require("http");

const userRoutes = require('./routes/userRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const todoRoutes = require('./routes/todoRoutes');
const historicoBusquedaRoutes = require('./routes/historicoBusquedaRoutes');
const conciertosRoutes = require('./routes/conciertosRoutes');
const openIaRoutes = require('./routes/openIaRoutes');
const unknownEndpoint = require('./middlewares/unknownEndpoint');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000; // Cambiado a 4000 para evitar conflictos con frontend

app.use(cors());
app.use(express.json());
app.use(helmet());

const io = new SocketServer(server, {
  cors: {
    origin: "*",
  }
});

app.use('/api', userRoutes);
app.use('/api/course', cursoRoutes);
app.use('/api/to-do', todoRoutes);
app.use('/api/conciertos', conciertosRoutes);
app.use('/api/openia', openIaRoutes);
app.use('/api/historical/search', historicoBusquedaRoutes);
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(docs));
app.use(unknownEndpoint);
app.use(errorHandler);

// Evento de conexión de Socket.IO
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
