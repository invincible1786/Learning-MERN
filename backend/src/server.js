import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"

import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 

connectDB();

// middleware
app.use(express.json())

app.use("/api/notes", notesRoutes);

// depends on the type of request of hit the routes with

app.listen(5000, () => {
    console.log("listening... at", PORT);
})

// mongodb+srv://ruhaankakar1786_db_user:9TaSsbwVAfRjgEL7@cluster0.ews5acn.mongodb.net/?appName=Cluster0