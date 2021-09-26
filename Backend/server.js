import { Server } from "socket.io";
import { PORT } from "./config/config.js"
import got from "got";

const io = new Server({ cors: { origin: "*" } });

const connection = (socket) => {
  console.log("connection")
  socket.on("front", async (callback) => {
    console.log("front socket id: ", socket.id)
    callback(`front-end socket id: ${socket.id}`)
  })
  socket.on("gstreamer", async (callback) => {
    console.log("gstreamer socket id: ", socket.id)
    callback(`gstreamer socket id: ${socket.id}`)
  })
  socket.on("disconnecting", () => {
    console.log("disconnecting socket id: ", socket.id)
  })
  socket.on("disconnect", () => {
    console.log("disconnect socket id: ", socket.id)
  })
}
const unconnection = ()=>{
  console.log("unconnection")
}

io.on("connection", connection);
io.listen(PORT);