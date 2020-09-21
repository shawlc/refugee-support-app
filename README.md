
## Refugee Support App

This is a static Javascript website I created Spring 2019 for my friend's project in the Refugee Law class (LAW 606-001) at the University of Pennsylvania Carey Law School. 

I used this project to introduce myself to the React framework. This application uses React Router to implement tabs within a single page. It also includes a web map displaying cash support programs around the world using the react-leaflet library.

The app can be viewed at https://shawlc.github.io/refugee-support-app

#### Instructions for deploying to Github Pages:

1. Clone master repository to local
2. cd to directory
3. npm run deploy

The package.config file includes commands to automatically convert the React application into a static format that can be consumed by GitHub Pages. These commands will also automatically push the production-ready app into the gh-pages branch in the repository. 
Make sure react-scripts and gh-pages are installed in npm prior to deploying. If not, you can use the following commands:

npm install react-scripts --save

npm install gh-pages --save

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
