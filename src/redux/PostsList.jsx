import { useSelector } from 'react-redux'
const PostsList = () => {

  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt m-3 rounded w-[50%] border items-center   justify-center p-6" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))
  return (
    <div className='   ml-12  items-center'>

<h2 >Posts</h2>
      {renderedPosts}
      <a href="/">RETURN TO HOME PAGE</a>.

    </div>
  )
}

export default PostsList