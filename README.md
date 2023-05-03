# Puzzled-application 

This interactive puzzle web application is designed to assess soft skills such as an eye for detail, perseverance, and curiosity. The web application follows the concept of a treasure hunt and contains correct clues, wrong clues, dead-ends, and one solution. The application stores user data, provide game statistics, and includes an admin dashboard to track and analyze user progress. The web application is hosted on Render for accessibility and ease of use.

# Soft Skills Assessed by the Puzzle

The following soft skills are assessed by this puzzle:

* Eye for detail
* Perseverance
* Logical thinking
* Listening Skills
* Problem solving skills

# Ways to Solve the Puzzle and Dead-Ends

The puzzle consists of five correct clues, two wrong clues and a dead-ends. The following are the possible ways to solve the puzzle:

* Clue 1: The first clue contains a riddle that leads to the second clue.
* Clue 2: The second clue is a map that hints at the location of the third clue outside the website.
* Clue 3: The third clue is a question based on a youtube video.
* Clue 4: The fourth clue is a puzzle from which user has to crack the code to reveal the final clue.
* Clue 5: The final clue is a jigsaw puzzle, which users have to solve outside the website that takes you to the treasure.
* If at any point the user enters the wrong answer, he would be diverted to a path(which contains wrong clues) that leads to a Dead-end, from where he should trace back.

More clear explanation and answers in admin dashboard.

# Features
### Main features
* User registration and login using email and password
* Minimum of 5 clues and 2 paths leading to dead-end
* User progress and data stored in database
* Prompt to restart the puzzle on refresh
* Admin dashboard to track and analyze user progress
* Hosting on cloud-hosting websites such as render.com
### Additional features
* User analytics such as time taken for each step and score are stored and shown in the admin dashboard
* Leaderboard to show the top users who completed the puzzle
* Hint system(for 2 clues only) to provide hints to users who are stuck on a clue

# Project Setup
* Clone the repository.
* Install Node.js, npm/yarn and mongoDB on your system.
### Frontend
* Navigate to the frontend folder './frontend'.
```
cd ./frontend
```
* run npm install to install the required packages.
```
npm install
```
* update the baseURL to the backend server in "./src/api/axios.js"
```
export default axios.create({
    baseURL: "backend_url",
});
```
* Run npm start to start the application
```
npm start
```
### Backend
* Navigate to the backend folder './backend'.
```
cd ./backend
```
* run npm install to install the required packages.
```
npm install
```
* Create a .env file in the current directory and add the following environment variables:
```
JWT_SECRET=<Your_SECRET_KEY>
DATABASE_URI=<Your_MONGODB_URI>
```
* update the whitelist to the frontend server in "./config/corsOptions.js"
```
const whitelist = [
    'frontend_url',
];
```
* Run the server by using this command
```
node index.js
```

