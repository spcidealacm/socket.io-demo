import { io } from "socket.io-client";

const socket = io("ws://localhost:9065")

const callback = (msg) =>{
  console.log(msg)
}

socket.on('connect', ()=>{
  console.log("connect socket id:", socket.id)
  socket.emit("gstreamer", callback)
})