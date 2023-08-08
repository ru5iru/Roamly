import express from 'express';
const app = express();
import cors from 'cors';
import userRoutes from "./routers/users.js";
import authRoutes from "./routers/auth.js";
import cookieParser from 'cookie-parser';



// Enable CORS for all routes
app.use((req,res,next) => {
    req.header("Access-Control-Allow-Origin", true);
    next();
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(cookieParser());


// Your API routes and other middleware should be defined after this

app.use("/server/users", userRoutes);
app.use("/server/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
