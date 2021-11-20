import { Box } from '@material-ui/core';
import { FC, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import AppRouter from './routes/AppRouter';

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Box paddingTop="70px">
          <AppRouter/>
        </Box>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
