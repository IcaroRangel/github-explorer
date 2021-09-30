import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/Global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Global />
    </>
  );
};

export default App;
