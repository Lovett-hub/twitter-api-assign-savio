// Import necessary packages
require('dotenv').config(); // Load environment variables from .env file
const { TwitterApi } = require('twitter-api-v2'); // Import Twitter API library

// Initialize the client with your credentials
const client = new TwitterApi({
    appKey: process.env.API_KEY,            // Your API Key
    appSecret: process.env.API_SECRET_KEY,  // Your API Secret Key
    accessToken: process.env.ACCESS_TOKEN,   // Your Access Token
    accessSecret: process.env.ACCESS_TOKEN_SECRET // Your Access Token Secret
});

// Use the readWrite client for actions that change data (like posting tweets)
const rwClient = client.readWrite; // This is crucial for posting tweets

// Function to post a new tweet
async function postTweet(content) {
    try {
        const response = await rwClient.v2.tweet(content); // Post the tweet
        console.log('Tweet posted successfully:', response); // Log success message
    } catch (error) {
        console.error('Error posting tweet:', error.response ? error.response.data : error); // Log error message
    }
}

// Call the function to post a tweet
postTweet("Hello from Twitter API!"); // Replace with your desired tweet content




// Import necessary packages
require('dotenv').config(); // Load environment variables from .env file
const { TwitterApi } = require('twitter-api-v2'); // Import Twitter API library

// Initialize the client with your credentials
const client = new TwitterApi({
    appKey: process.env.API_KEY,            // Your API Key
    appSecret: process.env.API_SECRET_KEY,  // Your API Secret Key
    accessToken: process.env.ACCESS_TOKEN,   // Your Access Token
    accessSecret: process.env.ACCESS_TOKEN_SECRET // Your Access Token Secret
});

// Use the readWrite client for actions that change data (like deleting tweets)
const rwClient = client.readWrite; // This is crucial for posting and deleting tweets

// Function to delete a tweet
async function deleteTweet(tweetId) {
    try {
        const response = await rwClient.v2.deleteTweet(tweetId); // Call the delete tweet method
        console.log(⁠ Tweet deleted successfully: ${JSON.stringify(response)} ⁠); // Log success message
    } catch (error) {
        console.error('Error deleting tweet:', error.response ? error.response.data : error); // Log error message
    }
}

// Example: Call the function to delete a tweet by providing its ID
deleteTweet('YOUR_TWEET_ID'); // Replace 'YOUR_TWEET_ID' with the ID of the tweet you want to delete