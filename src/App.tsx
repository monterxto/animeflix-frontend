import { Box } from '@material-ui/core';
import { FC, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import { Navbar } from './components/Navbar';
import AppRouter from './routes/AppRouter';

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Box paddingTop="70px">
          <Breadcrumbs/>
          <AppRouter/>
        </Box>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
