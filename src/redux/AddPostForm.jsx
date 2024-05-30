import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'
const AddPostForm = () => {

    const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }



  return (
    <div>
            <section>
      <h2>Add a New Post</h2>
      <form className='  border rounded  w-[800px]   p-5'>
        <label htmlFor="postTitle" >Post Title:</label>
        <input
          type="text"
          id="postTitle"
          className=' gap-2 border'
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          className=' border gap-2'
          onChange={onContentChanged}
        />
        <div className='flex justify-center items-center p-5'>
        <button onClick={onSavePostClicked} type="button" className=' btn-primary border text-white bg-blue-900'> Save Post</button>

        </div>
      </form>
    </section> 

    </div>
  )
}

export default AddPostForm