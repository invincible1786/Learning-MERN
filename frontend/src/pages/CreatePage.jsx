import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'

function CreatePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      await axios.post('http://localhost:5000/api/notes', { title, content })
      toast.success('Note created successfully!')
      navigate('/')
    } catch (error) {
      console.error('Error creating note:', error)
      toast.error(error.response?.data?.message || 'Failed to create note')
    } finally {
      setLoading(false)
    }
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
        <div className="flex-none">
          <button onClick={() => navigate('/')} className="btn btn-ghost gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Notes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title text-4xl mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ✍️ Create New Note
            </h2>
            <p className="text-gray-500 mb-6">Write down your thoughts and ideas</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Title</span>
                  <span className="label-text-alt text-gray-400">{title.length}/100</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a catchy title..."
                  className="input input-bordered input-lg w-full focus:input-primary"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={loading}
                  maxLength={100}
                />
              </div>

              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Content</span>
                  <span className="label-text-alt text-gray-400">{content.length} characters</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-80 text-base focus:textarea-primary leading-relaxed"
                  placeholder="Write your note here...\n\nYou can write as much as you want!"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>

              <div className="divider"></div>

              <div className="card-actions justify-end gap-2">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn btn-ghost btn-lg"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                      </svg>
                      Save Note
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
