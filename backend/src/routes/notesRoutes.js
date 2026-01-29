import express from "express"
import { createNote, deleteNote, getAllNote, updateNote } from "../controllers/notesController";

const router = express.Router();

// endpt -> url + http - client interact with resource

router.get("/", getAllNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.post("/:id", deleteNote);

export default Router;