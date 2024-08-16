import { useParams, Link, useNavigate } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);
  const navigate = useNavigate();

  const onDelete = async () => {
    await handleDelete(post.id);
    navigate('/');
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button className='deleteButton' onClick={onDelete}>Delete Post</button>
            <Link to={`/post/edit/${post.id}`}>
              <button className='editButton'>Edit Post</button>
            </Link>
          </>
        ) : (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to="/">Visit our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
