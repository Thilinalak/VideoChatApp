const express=require('express');
const app=express();
const server =  require('http').createServer(app)
const io = require('socket.io')(server)

const TWILIO_ACCOUNT_SID = "AC54a9a06a49ff6804e51bc8a0283cc450"
const TWILIO_AUTH_TOKEN = "a02b33108b6d2b81b3ee315532ea1520"

const twilio = require('twilio')(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN
  );

const mongoose=require('mongoose');
require("dotenv").config();
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_SERVER)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err))

const signUp=require('./router/signUp');
const verifyOtp=require('./router/verifyOtp');
const resendOtp=require('./router/resendOtp');
const login=require('./router/login');

app.use(express.json());
app.use('/api/signup',signUp);
app.use('/api/verifyOtp',verifyOtp);
app.use('/api/resendOtp',resendOtp);
app.use('/api/login',login);



io.on('connection', (socket)=>{
console.log('user Connected');
    socket.on('join', (room)=>{
      var clients = io.sockets.adapter.rooms[room];
      var numClients = typeof clients !== 'undefined' ? clients.length : 0;
      if(numClients == 0){
        socket.join(room);
      }else if(numClients == 1){
        socket.join(room);
        socket.emit('ready', room);
        socket.broadcast.emit('ready', room);
      }else{
        socket.emit('full', room);
      }
    });

    socket.on('token', ()=>{
        twilio.tokens.create((err, response)=>{
          if(err){
            console.log(err);
          }else{
            socket.emit('token', response);
          }
        });
      });

      socket.on('candidate', (candidate)=>{
        socket.broadcast.emit('candidate', candidate);
      });  


      socket.on('offer', (offer)=>{
        socket.broadcast.emit('offer', offer);
      });
  });



server.listen(4000);



