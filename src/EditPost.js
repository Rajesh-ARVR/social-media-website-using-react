import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditPost = ({
  posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => { 
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleEdit(post.id);
    navigate('/');
  };

  return (
    <main className='NewPost'>
      {post ? (
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={onSubmit}>
            <label htmlFor='postTitle'>Title:</label>
            <input 
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to='/'>Visit our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
}

export default EditPost;
