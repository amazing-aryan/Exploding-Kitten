# Exploding-Kitten
Exploding Kitten game made using ReactJS, Redux and Redis

## Installing application (For Ubuntu)

### Installing Redis

`sudo apt-get update`

`sudo apt-get upgrade`

`sudo apt-get install redis-server`

`sudo service redis-server start` To run redis server, it can be stopped afterwards with `sudo service redis-server stop` when application is not running

### Installing NodeJS

`sudo apt-get install -y nodejs`

### Installing Web App

Navigate to the project directory and then run following commands:

`cd Backend`

`npm install`

## Running Web App

Run the App using `npm run start` in /Backend directory

Application can be opened at `http://localhost:8081/`

## Things to Know

1. Frontend contains code for the frontend part, which can be accessed and run independently after `npm install` and `npm run start` in `/Frontend/Exploding-Kitten`
