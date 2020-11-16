import React, { FC } from 'react';
import { SelectBox } from 'devextreme-react/select-box';

import './style.css';

export const SearchableSelect: FC = () => {
  const mockData = ['Fidelidade', 'Acordo Comercial'];

  return (
    <>
      <label>Search cars:</label>
      <SelectBox
        dataSource={mockData}
        searchEnabled={true}
        className="basic-input select-list"
      />
    </>
  );
};
