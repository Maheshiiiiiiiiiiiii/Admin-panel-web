// Sample data representing posts
let posts = [
    { id: 1, title: "Hi everyone I'm Maheshiii!." },
    { id: 2, title: "New update for sign language learners." },
    { id: 3, title: "Speak with Hands." }
];

let activities = [];

// Function to display posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${post.title}</h3><button onclick="approvePost(${post.id})">Approve</button><button onclick="removePost(${post.id})">Remove</button>`;
        postList.appendChild(postDiv);
    });
}

// Function to display activities
function displayActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    activities.forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity');
        activityDiv.innerHTML = `<p>${activity}</p>`;
        activityList.appendChild(activityDiv);
    });
}

// Function to approve a post
function approvePost(postId) {
    // Find the index of the post to be approved
    const index = posts.findIndex(post => post.id === postId);
    if (index !== -1) {
        // Remove the post from the list
        posts.splice(index, 1);
        // Update UI
        displayPosts();
        // Perform additional actions if needed
        console.log(`Post with ID ${postId} approved.`);
    }
}

// Function to remove a post
function removePost(postId) {
    // Find the index of the post to be removed
    const index = posts.findIndex(post => post.id === postId);
    if (index !== -1) {
        // Remove the post from the list
        posts.splice(index, 1);
        // Update UI
        displayPosts();
        // Perform additional actions if needed
        console.log(`Post with ID ${postId} removed.`);
    }
}

// Function to add an activity
function addActivity() {
    const activity = prompt("Enter activity:");
    if (activity) {
        activities.push(activity);
        displayActivities();
    }
}

// Display initial list of posts and activities
displayPosts();
displayActivities();
