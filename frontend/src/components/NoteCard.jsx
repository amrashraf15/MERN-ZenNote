import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import api from "../lib/axios"
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import toast from "react-hot-toast"

const NoteCard = ({note,setNotes}) => {
    const handleDelete =async (e,id) =>{
        e.preventDefault();
        if(!window.confirm("Are You sure you want to delete this note")) return;
        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev)=>prev.filter(note => note._id !== id)) //get rid of deleted note without doing refresh
            toast.success("Note deleted successfully")
        } catch (error) {
            console.error("some thing went wrong",error)
            toast.error("failed to delete Note")
        }
    };
  return (
    <Link to={note._id} className='card bg-base-100  hover:shadow-lg transition-all duration-200 border-t-4 border-secondary border-solid'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content.length > 100 ? note.content.slice(0, 100) + '...' : note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>
                    {formatDate(note.createdAt)}    
                </span>
                <div className='flex items-center gap-'>
                    <PenSquareIcon className='size-4'/>
                    <button className='btn btn-ghost btn-sm text-error' onClick={(e)=>handleDelete(e,note._id)}>
                        <Trash2Icon className='size-4'/>
                    </button>
                </div>

            </div>

        </div>
    </Link>
  )
}

export default NoteCard