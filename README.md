## Welcome to Velo-Maps!

Using Google Maps Javascript API and google-react-maps npm library, Velo-maps is a an interactive route planning app. Currently the focus is on bike routes, but could be shifted to focus on something else like hiking routes or rock climbing spots. 

I got the idea for this app when I was struggling to find tools to help me plan safe 
bike routes to destinations around Denver. I found the Google Maps API with their bicycle layer and thought it would be perfect for an app that allows users to plan safe urban bike rides, especially for bike commuters, or cyclists in an unfamilier town.

### Link to deployed app: 
[https://velo-maps.herokuapp.com/](https://velo-maps.herokuapp.com/)

### Link to server github repo:
https://github.com/carpenter-js/VeloMaps-server


### Screenshots:

- Default view:
![alt text](https://i.imgur.com/Xz8SI8A.png)
- Help window:
![alt text](https://i.imgur.com/NAGgrL7.png)
- Creating a route:
![alt text](https://i.imgur.com/NIei5JJ.png)
- Viewing a saved route:
- ![alt text](https://i.imgur.com/Xz8SI8A.png)

### Tech stack:

Frontend: React<br>
State Management: Redux<br>
Server: Node with Express<br>
Database: Mongo

### Organization of code base:
Everything lives in the src folder.<br>
- src
  - actions (holds all redux action files)
  - components (holds all react components)
    - index.js (holds root App component)
    - bike-map.js (component for the google map, handles map rendering and manipulations)
    - add-route-button.js (handles rendering for create-routes-form.js components)
  - reducers (holds redux reducers)
  - styles (holds all css style sheets for react components)
 - config.js (holds config vars)
 - index.js (calls ReactDOM.render, renders root App component and Provider)
 - store.js (creates redux store)
 - validators.js (holds redux-form validators)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
