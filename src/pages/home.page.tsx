import React from 'react';
import network from '../utils/check-network';
import { SearchableSelect, Autcomplete } from '../lib';

import './home.css';

function Home() {
  return network() ? (
    <>
      <div style={{ display: 'flex' }}>
        <div className="col-4">
          <SearchableSelect />
        </div>
        <div className="col-4">
          <label>Teste</label>
          <Autcomplete></Autcomplete>
        </div>
      </div>
    </>
  ) : (
    <h1>Sem net brow</h1>
  );
}

export default Home;
