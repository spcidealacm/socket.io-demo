import './style.css'
import { DAdd, DCrt, DGetID } from './utils'

const root = DGetID("root")
const info = DCrt("span")
DAdd(root, info)

const socket = io("ws://localhost:9065")

const callback = (msg) =>{
  info.innerHTML = msg
}

socket.on('connect', ()=>{
  console.log("connect socket id:", socket.id)
  socket.emit("front", callback)
})