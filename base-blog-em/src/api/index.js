const maxPostPage = 10;
const BASE_URL = "https://jsonplaceholder.typicode.com";
async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts?_limit=10&_page=0`);
  return response.json();
}

async function getComments(postId) {
  const response = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(`${BASE_URL}/postId/${postId}`, {
    method: "DELETE",
  });
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(`${BASE_URL}/postId/${postId}`, {
    method: "PATCH",
    data: { title: "REACT QUERY FOREVER!!!!" },
  });
  return response.json();
}

export { getPosts, getComments, deletePost, updatePost };
