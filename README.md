

#Twitter API Interaction with Node.js

# Introduction
This project is a simple Node.js application that demonstrates how to interact with the Twitter API. The program allows you to post and delete tweets using your Twitter Developer credentials. Through this project, you will learn how to use OAuth authentication, make API requests, handle errors, and manage environment variables securely.

##Setup Instructions

 #1. Created  a Twitter Developer Account

- [ ] Visited the [Twitter Developer Portal](https://developer.twitter.com/) and sign up for a developer account.
- [ ] Once your account is set up, create a new project and an associated Twitter app.
  
# 2. Generate API Keys
After creating your Twitter app, navigate to the "Keys and Tokens" section and generate the following credentials:
- [ ] API Key
- [ ] API Secret Key
- [ ] Access Token
- [ ] Access Token Secret

#3. Set up Environment Variables:
Create a .env file in your project root directory and add the following keys:
  
  API_KEY=your_api_key_here
  API_SECRET_KEY=your_api_secret_key_here
  ACCESS_TOKEN=your_access_token_here
  ACCESS_TOKEN_SECRET=your_access_token_secret_here
  
  Replace the placeholders with your actual keys from the Twitter Developer portal.

#4. Run the Program Install the necessary packages by running bash
 
 
 Program Details

#1. Posting a New Tweet
The function `postTweet()` sends a request to the Twitter API to post a new tweet. Here's how it works:
- [ ]  It authenticates the API request using the credentials from the .env file.
- [ ] It sends a request to the Twitter API endpoint to create a tweet.
  
For Example:
javascript
postTweet("Hello from Twitter API!");


API Response:
json
{
  "data": {
    "id": "1234567890",
    "text": "Hello from Twitter API!"
  }
}

  
# 2. Deleting an Existing Tweet
The deleteTweet() function sends a request to delete a tweet using its tweet ID. Here's how it works:
- [ ]  It authenticates using your credentials.
- [ ]  It calls the delete endpoint with the specific tweet ID.

Example:
javascript
deleteTweet("1234567890");


API Response:
json
{
  "data": {
    "id": "1234567890",
    "deleted": true
  }
}


# Error Handling
The program handles errors that might occur during API calls. For instance, if the API keys are incorrect, or the tweet ID is invalid, the program will catch the error and log it.

Example Error:
json
{
  "title": "Undifiend”,
  "detail": "Invalid or expired token",
  "type": "about:blank",
  "status": 401
}


