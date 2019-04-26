import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, amber } from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

console.log(red)

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            // main: '#ffc107',
            main: amber.A400,
            light: amber[200],
            dark: amber[700]
        },
        type: 'dark',
        spacing: {
            unit: 10
        }
    }
})
console.log(theme)

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
