import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/ratelimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 

// middleware
app.use(express.json());
app.use(rateLimiter);
app.use(
    cors({
        origin: "http://localhost:5173",
        })
    );
// custom middleware -> before response execution
// app.use((res,res,next) => {
//     console.log(`req method is ${req.method} & Req url is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});

// mongodb+srv://ruhaankakar1786_db_user:9TaSsbwVAfRjgEL7@cluster0.ews5acn.mongodb.net/?appName=Cluster0