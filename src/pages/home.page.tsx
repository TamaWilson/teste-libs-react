import React from 'react';
import network from '../utils/check-network';
import { Autcomplete, SimpleInput, MxInput, MxInputIcon } from '../lib';
import { Button } from 'devextreme-react/text-box';
import './home.css';
import { FormControl } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

function Home() {
  return network() ? (
    <>
      <div style={{ display: 'flex', marginLeft: '100px' }}>
        <div className="col-4">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Material-Ui</h1>
            <div className="col-4">
              <FormControl style={{ width: '100%' }}>
                <span>AutoComplete Selector</span>
                <Autcomplete></Autcomplete>
              </FormControl>
            </div>
            <div className="col-4">
              <FormControl style={{ width: '100%' }}>
                <span>Simple Input</span>
                <SimpleInput></SimpleInput>
              </FormControl>
            </div>
            <div className="col-4">
              <FormControl style={{ width: '100%' }}>
                <span>Icon Input</span>
                <SimpleInput
                  placeholder="Escolha uma coisa"
                  variant="outlined"
                  InputProps={{
                    autoComplete: 'new-password', // disable autocomplete and autofill
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginRight: 0 }}
                      >
                        <AccountCircle></AccountCircle>
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="col-4" style={{ marginLeft: '100px' }}>
          <h1>DevExtreme</h1>
          <div className="col-4">
            <span>Simple Input</span>
            <MxInput></MxInput>
          </div>
          <div className="col-4">
            <MxInput placeholder="Teste">
              <Button
                name="teste"
                location="after"
                options={{ icon: 'mention' }}
              />
            </MxInput>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Sem net brow</h1>
  );
}

export default Home;
