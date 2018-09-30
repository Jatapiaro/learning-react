# Install the following with node 

Do the following only if you don't have it already installed

    1. Install yarn `npm install -g yarn`

## Steps to create a react app

    1. Make a public folder in your app directory
    2. Inside the public folder create an index.html file
    3. Execute `yarn init`
    4. Install React and ReactDOM `yarn add react react-dom`
    5. Instal Install babel dependencies `yarn add babel-cli babel-preset-react babel-preset-env babel-core babel-loader`
    6. Install extra babel class property `yarn add babel-plugin-transform-class-properties`
    7. Install webpack dependencies `yarn add webpack webpack-dev-server`
    8. Install scss loaders `yarn add style-loader css-loader sass-loader node-sass` 
    9. Extras: `yarn add normalize.css`
    10. Make a `src` folder on the root of your project `mkdir src`
    11. Inside the folder create `touch app.js`
    12. On the root folder create `touch webpack.config.js`
    13. On the root folder create `touch .babelrc`
    
    14. Or simply `yarn add react react-dom babel-cli babel-preset-react babel-preset-env babel-core babel-loader babel-plugin-transform-class-properties webpack webpack-dev-server style-loader css-loader sass-loader node-sass normalize.css`

### Check this when you have doubt about the event bindings.

https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render

### To remove the global installers

    1. `npm uninstall -g babel-cli`
    2. `npm uninstall -g live-server`



