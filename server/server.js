import express from 'express';
import dotenv from 'dotenv';
// import http from 'http';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from 'cors';
// import http from 'http';

import { Server } from 'socket.io';

import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;

// routes
import userRoutes from "./routes/userRoutes.js";
import badgeRoutes from "./routes/badgeRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import interstRoutes from "./routes/interestRoutes.js"
import likeRoutes from "./routes/likeRoutes.js"
import exploreRoutes from "./routes/exploreRoutes.js"
import adsRoutes from "./routes/adsRoutes.js"
import feedRoutes from "./routes/feedRoutes.js"

// start DB connection
connectDB();

// create express app
const app = express();


// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to parse cookies from request header
app.use(cookieParser());

// Use the cors middleware
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow credentials in the request
}));

//socket server

const io = new Server({
    cors:{
        origin:"http://localhost:3000"
    }
});

let onlineUsers=[];

const addNewUser = (userEmail, socketId)=>{
    !onlineUsers.some((user)=>user.userEmail === userEmail) && 
    onlineUsers.push({userEmail, socketId});   

    console.log(userEmail)
};

// const userMap = new Map(); // Use a Map to store users

// const addNewUser = (userEmail, socketId) => {
//     if (!userMap.has(userEmail)) {
//         userMap.set(userEmail, socketId);
//         onlineUsers.push({ userEmail, socketId });
//         console.log(`New user added: ${userEmail}`);
//     } else {
//         const existingSocketId = userMap.get(userEmail);
//         if (existingSocketId !== socketId) {
//             // Handle the situation where the same user has different socket IDs
//             console.log(`User ${userEmail} already exists with a different socket ID.`);
//         }
//     }
// };


const removeUser =(socketId) =>{
    onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId); 
};

const getUser =(userEmail) => {
    return onlineUsers.find((user)=>user.userEmail === userEmail);

};

io.on("connection",(socket)=>{
    socket.on("newUser", (userEmail)=>{
        addNewUser(userEmail, socket.id);

        
    });

    socket.on("sendNotification", ({senderName,receiverEmail,type})=>{
        const receiver = getUser(receiverEmail)
        io.to(receiver?.socketId).emit("getNotification", {
            senderName,
            type,
        });
    });


    socket.on("disconnect",()=>{
        removeUser(socket.id);
    });

});


// user routes
app.use('/server/users', userRoutes);

// badge routes
app.use("/server/badges", badgeRoutes);

// post routes
app.use("/server/posts", postRoutes);

// interest routes
app.use("/server/interests", interstRoutes);

// like routes
app.use("/server/likes", likeRoutes);

//Search routes
app.use("/server/explore", exploreRoutes);

//Ads routes
app.use("/server/ads", adsRoutes);

//feed routes
app.use("/server/feed", feedRoutes);

//notifications routes
// app.use('/server/notifications', notificationRoutes);

// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

io.listen(5000);