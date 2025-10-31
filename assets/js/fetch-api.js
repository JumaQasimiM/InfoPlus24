import { FetchPosts, getPost, getPostUser } from "./api.js";

// console.log(FetchPosts());
// console.log(getPost(12));

async function showPost(post_id) {
  const { user, post } = await getPostUser(post_id);

  console.log("post", post.title);
  console.log("user", user.firstName);
}
showPost(12);
