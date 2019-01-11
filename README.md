## Welcome to Velo-Maps!

Using Google Maps Javascript API and google-react-maps npm library, Velo-maps is a an interactive route planning app. Currently the focus is on bike routes, but could be shifted to focus on something else like hiking routes or rock climbing spots. 

I got the idea for this app when I was struggling to find tools to help me plan safe 
bike routes to destinations around Denver. I found the Google Maps API with their bicycle layer and thought it would be perfect for an app that allows users to plan safe urban bike rides, especially for bike commuters, or cyclists in an unfamilier town.

### Link to deployed app: 
[https://velo-maps.herokuapp.com/](https://velo-maps.herokuapp.com/)

### Screenshots:

### Tech stack:

Frontend: React
State Management: Redux
Server: Node with Express
Database: Mongo

Dependencies:
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-google-maps": "^9.4.5",
    "react-redux": "^6.0.0",
    "react-scripts": "^2.1.2",
    "react-spinkit": "^3.0.0",
    "redux": "^4.0.1",
    "redux-form": "^8.1.0",
    "redux-thunk": "^2.3.0"

### Organization of code base:
Everything lives in the src folder.
-src
  -actions (holds all redux action files)
  -components (holds all react components)
    -index.js (holds root App component)
    -bike-map.js (component for the google map, handles map          rendering and manipulations)
    -add-route-button.js (handles rendering for create-routes-form.js components)
  -reducers (holds redux reducers)
  -styles (holds all css style sheets for react components)
  config.js (holds config vars)
  index.js (calls ReactDOM.render, renders root App component and Provider)
  store.js (creates redux store)
  validators.js (holds redux-form validators)


  

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
