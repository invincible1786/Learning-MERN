import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);
// depends on the type of request of hit the routes with

app.listen(5000, () => {
    console.log("listening...")
})