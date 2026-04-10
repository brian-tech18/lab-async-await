function showPostsOnScreen(postArray) {
  const listContainer = document.getElementById('post-list');

  for (const singlePost of postArray) {
    const listItem = document.createElement('li');
    
    const postTitle = document.createElement('h1');
    postTitle.textContent = singlePost.title;

    const postContent = document.createElement('p');
    postContent.textContent = singlePost.body;

    listItem.appendChild(postTitle);
    listItem.appendChild(postContent);

    listContainer.appendChild(listItem);
  }
}

async function startSocialMediaApp() {
  try {
    
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const results = await apiResponse.json();

    showPostsOnScreen(results);

  } catch (err) {
    console.warn("Could not load the posts:", err);
  }
}

startSocialMediaApp();
