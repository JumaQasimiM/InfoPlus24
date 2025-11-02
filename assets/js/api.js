// ==============================
// 📦 API Utility Functions
// ==============================

// This module handles fetching posts and user data
// from the DummyJSON API. Each function is asynchronous
// and returns parsed JSON data for easy use in your app.

/**
 * Fetch all posts from the DummyJSON API.
 *
 * @async
 * @function FetchPosts
 * @throws {Error} If the response is not OK (status not 200–299).
 */
export async function FetchPosts(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Posts not found! Status: " + response.status);
  }

  return await response.json();
}

/**
 * Fetch a single post by its ID.
 *
 * @async
 * @function getPost
 * @param {number|string} post_id - The unique ID of the post.
 * @throws {Error} If the network request fails or post not found.
 */
export async function getPost(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Post not found! Status: " + response.status);
  }

  return await response.json();
}

/**
 * Fetch a user by their ID.
 *
 * @async
 * @function getUser
 * @param {number|string} user_id - The unique ID of the user.
 * @throws {Error} If the user is not found or the request fails.
 */
export async function getUser(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("User not found! Status: " + response.status);
  }

  return await response.json();
}

/**
 * Fetch both a post and its associated user.
 *
 * @async
 * @function getPostUser
 * @param {number|string} post_id - The unique ID of the post.
 * @throws {Error} If either the post or user cannot be fetched.
 */
export async function getPostUser(post_id) {
  const post = await getPost(post_id);
  const user = await getUser(post.userId);
  return { user, post };
}

// set title for page
export function page_title() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("slug");
  return title ? decodeURIComponent(title.replace(/-/g, " ")) : "Home";
}
