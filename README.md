# Twitter API Assignment

## Introduction
This assignment demonstrates how to interact with the Twitter API using Node.js. It aims to provide hands-on experience with REST APIs and OAuth authentication by allowing students to create and delete tweets programmatically. By completing this assignment, students will learn:

- How to authenticate with the Twitter API using OAuth.
- How to make POST requests to create a new tweet.
- How to make DELETE requests to remove an existing tweet.
- Best practices for writing well-documented code.

## Setup Instructions

### Setting Up a Twitter Developer Account
1. **Create a Twitter Account**: If you don’t have a personal account for testing, create a new Twitter account.
2. **Sign Up for a Developer Account**:
   - Go to the [Twitter Developer Platform](https://developer.twitter.com/en).
   - Click on “Apply” for a developer account and fill in the necessary information.
3. **Create a New Project and App**:
   - Once your account is approved, navigate to the Developer Portal.
   - Click on “Projects & Apps” in the sidebar and create a new project and an app.

### Generating API Keys
1. **Navigate to Your App**: 
   - Click on “Projects & Apps” → “Your App” → “Keys and Tokens”.
2. **Generate the Following Keys and Tokens**:
   - **API Key**
   - **API Secret Key**
   - **Bearer Token** (optional for this assignment)
   - **Access Token**
   - **Access Token Secret**

### Configuring OAuth
- Set the **Callback URL** to `http://localhost:3000` (or another local environment URL for testing).
- Ensure user authentication settings are configured under your app settings.

### Running Your Program
1. **Clone or Download the Project**: If this is a shared project, clone or download it to your local machine.
2. **Open Terminal**:
   - Navigate to the project directory.
3. **Install Dependencies**:
   - Run the following command to install the required packages:
     ```bash
     npm install
     ```
4. **Create a `.env` File**:
   - In the root of your project, create a `.env` file and add your API keys as follows:
     ```plaintext
     API_KEY=your_api_key
     API_SECRET_KEY=your_api_secret_key
     ACCESS_TOKEN=your_access_token
     ACCESS_TOKEN_SECRET=your_access_token_secret
     ```
5. **Run the Program**:
   - Execute the following command in the terminal:
     ```bash
     node twitterapp.js
     ```

## Program Details

### Posting a New Tweet
The program includes a function named `postTweet`, which uses the Twitter API's `POST statuses/update` endpoint to create a new tweet. The function sends a request containing the tweet text, and if successful, it outputs a confirmation message.

**Example Request**:
```javascript
await postTweet("Hello from Twitter API!");

# twitter-api-assign-savio
