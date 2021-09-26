import { Server } from "socket.io";
import { PORT, GOT_INFO } from "./config/config.js"
import got from "got";

const io = new Server({ cors: { origin: "*" } });

const connection = (socket) => {
  socket.on("users", async (callback)=>{
    const response = await got(GOT_INFO)
    console.log(response.body)
    callback(response.body)
  })
}

io.on("connection", connection);
io.listen(PORT);