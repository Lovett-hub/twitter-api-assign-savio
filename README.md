# Twitter API Interaction with Node.js

## Introduction
In this project, I developed a simple Node.js application that interacts with the Twitter API. This application allows me to post and delete tweets using my Twitter Developer credentials. The purpose of this project is to demonstrate how to use OAuth authentication, make API requests, handle errors, and manage environment variables securely.

## Setup Instructions

### 1. Create a Twitter Developer Account
- [ ] I started by visiting the [Twitter Developer Portal](https://developer.twitter.com/) and signing up for a developer account.
- [ ] After setting up the account, I created a new project along with an associated Twitter app.

### 2. Generate API Keys
Once the Twitter app was created, I navigated to the "Keys and Tokens" section and generated the following credentials:
- [ ] API Key
- [ ]  API Secret Key
- [ ] Access Token
- [ ] Access Token Secret

### 3. Set up Environment Variables
I created a `.env` file in the project's root directory and added the necessary keys:

```bash
API_KEY=your_api_key_here
API_SECRET_KEY=your_api_secret_key_here
ACCESS_TOKEN=your_access_token_here
ACCESS_TOKEN_SECRET=your_access_token_secret_here
```

I replaced the placeholders with the actual values from the Twitter Developer portal.

### 4. Install Dependencies and Run the Program
Before running the application, I installed the required Node.js packages by running:

```bash
npm install
```

## Program Details

### 1. Posting a New Tweet
I implemented the `postTweet()` function to send a request to the Twitter API for posting a tweet. Here's how it works:
- It authenticates the API request using the credentials stored in the `.env` file.
- It sends a request to the Twitter API endpoint to create the tweet.

For example:

```javascript
postTweet("Hello from the Twitter API!");
```

**API Response:**

```json
{
  "data": {
    "id": "1234567890",
    "text": "Hello from the Twitter API!"
  }
}
```

### 2. Deleting an Existing Tweet
The `deleteTweet()` function deletes an existing tweet using its ID. Here's the process:
- It authenticates the request using the credentials.
- It calls the delete endpoint, passing in the tweet ID.

For example:

```javascript
deleteTweet("1234567890");
```

**API Response:**

```json
{
  "data": {
    "id": "1234567890",
    "deleted": true
  }
}
```

## Error Handling
I included error handling to manage issues that might arise during API calls. For instance, if the API keys are incorrect or if the tweet ID is invalid, the program will catch and log the error.

Example Error Response:

```json
{
  "title": "Undefined",
  "detail": "Invalid or expired token",
  "type": "about:blank",
  "status": 401
}
```
