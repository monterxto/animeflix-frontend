import { Box, MuiThemeProvider, styled } from '@material-ui/core';
import {SnackbarProvider} from "./components/SnackbarProvider";
import { FC, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import { Navbar } from './components/Navbar';
import AppRouter from './routes/AppRouter';
import theme from './theme';

const App: FC = () => {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <Navbar/>
            <Box paddingTop="70px" bgcolor="background.default" minHeight="calc(100vh - 70px)">
              <Breadcrumbs/>
              <AppRouter/>
            </Box>
          </BrowserRouter>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
