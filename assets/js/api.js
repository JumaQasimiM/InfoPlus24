// get data form api

export async function FetchPosts() {
  const url = "https://dummyjson.com/posts";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("posts not found!", response.status);
  }
  return await response.json();
}

export async function getPost(post_id) {
  const response = await fetch("https://dummyjson.com/posts/" + post_id);
  const post = await response.json();
  return post;
}

export async function getUser(user_id) {
  const response = await fetch("https://dummyjson.com/users/" + user_id);
  const user = await response.json();
  return user;
}

export async function getPostUser(post_id) {
  const post = await getPost(post_id);
  const user = await getUser(post.userId);
  return { user, post };
}
