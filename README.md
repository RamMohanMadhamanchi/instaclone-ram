# instaclone-ram
A clone of instagram with posts and adding posts

Pre-Requisites:

1. login to heroku with `heroku login`

backend:
1. move terminal to instaclone-backend folder: `cd instaclone-backend`
2. create project using: `npm init`
3. install express: `npm i express`
4. install body-parser: `npm i body-parser`
5. install mongoDB: `npm i mongoose`
6. install multer: `npm i multer`
7. install cors: `npm i cors`
8. install nodemon: `npm i nodemon`
9. add :
    "watch": "nodemon app",
    "start": "node app",
    into 'package.json' file
10. create a new SSH public key: `heroku git:remote -a instaclone-backend-ram`
11. To check remotes: `git remote -v`
    <!-- heroku  https://git.heroku.com/instaclone-backend-ram.git (fetch)
    heroku  https://git.heroku.com/instaclone-backend-ram.git (push) 
    origin  https://github.com/RamMohanMadhamanchi/instaclone-ram.git (fetch)
    origin  https://github.com/RamMohanMadhamanchi/instaclone-ram.git (push) -->


frontend:
1. move terminal to instaclone-frontend folder: `cd instaclone-frontend`
2. install react: `npm install`
3. install react-router-dom: `npm install react-router-dom`
4. install axios: `npm install axios`
5. create a new SSH public key: `heroku git:remote -a instaclone-frontend-ram`
6. To check remotes: `git remote -v`
    <!-- heroku  https://git.heroku.com/instaclone-frontend-ram.git (fetch)
    heroku  https://git.heroku.com/instaclone-frontend-ram.git (push) 
    origin  https://github.com/RamMohanMadhamanchi/instaclone-ram.git (fetch)
    origin  https://github.com/RamMohanMadhamanchi/instaclone-ram.git (push) -->