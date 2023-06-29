# NoSQL-API

## Description
User Story <br>
AS A social media startup <br>
I WANT an API for my social network that uses a NoSQL database <br>
SO THAT my website can handle large amounts of unstructured data <br>

Acceptance Criteria <br>
GIVEN a social network API <br>
WHEN I enter the command to invoke the application <br>
THEN my server is started and the Mongoose models are synced to the MongoDB database <br>
WHEN I open API GET routes in Insomnia for users and thoughts <br>
THEN the data for each of these routes is displayed in a formatted JSON <br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia <br>
THEN I am able to successfully create, update, and delete users and thoughts in my database <br>
WHEN I test API POST and DELETE routes in Insomnia <br>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list <br>

The  motivation behind this project was to create an API for a social media account that would allow the user to add their user information, share thoughts, react to others' thoughts, and add friends to their profile. 
I built this project to give a resource to users that want an API for social media use.
I learned quite a bit about routes and controllers. I learned how they fit together between the different files to do the actions that you are looking for in your project. I learned the importance of having the correct id that is being searched for otherwise you won't find it.

## Installation

Access the project in the public github repository. Click the green code button and copy the SSH code. Open your terminal or bash account and 'git clone' the code that was copied from the site. Open VS Code and open an integrated terminal in the 'NoSQL-API' project. Run "npm i" then "node index.js" and it should say that "API server running on port 3001!"

## Usage

Open Insomnia to http://localhost:3001 and begin entering the code in the thoughts.js and users.js files to utilize the information.

## License
MIT License
