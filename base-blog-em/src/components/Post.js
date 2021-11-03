const Post = ({ post, onSelectedPost }) => {
  return (
    <li
      key={post.id}
      className="post-title"
      onClick={() => onSelectedPost(post)}
    >
      {post.title}
    </li>
  );
};

export default Post;
