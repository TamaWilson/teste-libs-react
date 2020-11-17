import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home.page';

import LayoutGlobal from './layout/global.layout';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './layout/mateus-extreme.css';

ReactDOM.render(
  <React.StrictMode>
    <LayoutGlobal />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
