

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalCss from "./styles/globalStyle"

const App: React.FC = () =>
  <>
    <BrowserRouter><Routes /></BrowserRouter>
    <GlobalCss />
  </>

export default App;
