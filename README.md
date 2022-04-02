# Your Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Use "http://localhost:3000/data-200.json" to fetch partner companies, each with the
following information:
- name: string
- status: 'NEW' | 'LIVE' | 'OFFLINE'
- paymentModes: [ 'CREDIT_CARD' | 'PAYPAL' | 'BANK_TRANSFER' ]

2. Create a table using this data.

3. Add following filters at the top of the table:
- A search input field, which will search against name
- A select field, which will search against status
- A multi select field, which will search against payment methods

4. Some unit test cases will be good to have. (Optional)

NOTE: You are free to use any component / css library you like. But we recommend to use Material-UI (https://mui.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
