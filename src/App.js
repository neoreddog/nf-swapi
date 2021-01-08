import React, { Component } from 'react';
import { StarWars } from './Swapi.js';
import logo from './droideka.png';
import './App.css';
import {ThemeProvider} from 'styled-components'
import darkTheme from './Theme/dark.js'
import Box from "./Custom/Box";


const MyObject = {
  'name': 'Dan',
  game: 'halo reach'
}

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box className="App" bg={'#12161F'} p={0}>
              <Box>
                <img src={logo} className="App-logo" alt="logo" p={4} />
                <StarWars/>
              </Box>
            </Box>
        </ThemeProvider>

    );
  }
}

export default App;
