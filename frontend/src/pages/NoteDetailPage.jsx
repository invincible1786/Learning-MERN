import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'

const NoteDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchNote()
  }, [id])

  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notes/${id}`)
      setNote(response.data)
      setTitle(response.data.title)
      setContent(response.data.content)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching note:', error)
      toast.error('Note not found')
      navigate('/')
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setSaving(true)
    try {
      await axios.put(`http://localhost:5000/api/notes/${id}`, { title, content })
      toast.success('Note updated successfully!')
      setNote({ ...note, title, content })
      setEditing(false)
    } catch (error) {
      console.error('Error updating note:', error)
      toast.error(error.response?.data?.message || 'Failed to update note')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) return
    
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`)
      toast.success('Note deleted successfully')
      navigate('/')
    } catch (error) {
      console.error('Error deleting note:', error)
      toast.error('Failed to delete note')
    }
  }

  const handleCancel = () => {
    setTitle(note.title)
    setContent(note.content)
    setEditing(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex justify-center items-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-gray-600">Loading note...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="flex-1">
          <a onClick={() => navigate('/')} className="btn btn-ghost text-2xl font-bold text-primary cursor-pointer">
            📝 Notes App
          </a>
        </div>
        <div className="flex-none gap-2">
          {!editing && (
            <>
              <button onClick={() => setEditing(true)} className="btn btn-primary gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Edit
              </button>
              <button onClick={handleDelete} className="btn btn-error gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Delete
              </button>
            </>
          )}
          <button onClick={() => navigate('/')} className="btn btn-ghost gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 max-w-5xl">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            {editing ? (
              <form onSubmit={handleUpdate}>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ✏️ Edit Note
                </h2>
                <div className="form-control w-full mb-6">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">Title</span>
                    <span className="label-text-alt text-gray-400">{title.length}/100</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-lg w-full focus:input-primary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={saving}
                    maxLength={100}
                  />
                </div>

                <div className="form-control w-full mb-6">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">Content</span>
                    <span className="label-text-alt text-gray-400">{content.length} characters</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-96 text-base focus:textarea-primary leading-relaxed"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    disabled={saving}
                  ></textarea>
                </div>

                <div className="divider"></div>

                <div className="card-actions justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-ghost btn-lg"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg gap-2"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                        </svg>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-5xl font-bold flex-1 pr-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {note?.title}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="badge badge-lg gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Created: {new Date(note?.createdAt).toLocaleString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </div>
                  {note?.updatedAt && note.updatedAt !== note.createdAt && (
                    <div className="badge badge-lg badge-outline gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                      Updated: {new Date(note.updatedAt).toLocaleString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      })}
                    </div>
                  )}
                </div>
                <div className="divider"></div>
                <div className="prose max-w-none">
                  <p className="text-lg whitespace-pre-wrap leading-relaxed text-gray-700">
                    {note?.content}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage
