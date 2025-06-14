import express from 'express';
import{getAllNotes,getNoteById,createNote,updateNote,deleteNote} from "../controllers/notesController.js";
import { get } from 'http';
const router = express.Router();
//get all notes 
router.get('/', getAllNotes);

//get a single note by id
router.get('/:id',getNoteById);
//create a new note
router.post('/', createNote);

//update a note
router.put('/:id',updateNote);

//delete a note
router.delete('/:id', deleteNote);



export default router;
