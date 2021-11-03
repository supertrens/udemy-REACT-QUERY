import { useState } from "react";
import { useQuery } from "react-query";

import { Post, PageControl, PostDetail } from "./components";
import { getPosts } from "./api";

export function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  // replace with useQuery
  const { isLoading, data } = useQuery("posts", getPosts);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <ul>
        {data.map((post) => (
          <Post post={post} onSelectedPost={setSelectedPost} />
        ))}
      </ul>

      <PageControl />

      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
