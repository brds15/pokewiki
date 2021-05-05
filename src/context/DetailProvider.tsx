import React, { createContext, FC, useState } from 'react';
import { DetailContextState, DetailObject } from './types';

const contextDefaultValues: DetailContextState = {
  data: {
    color: '',
    captureRate: 0,
    id: 0,
    isBaby: false,
    isLegendary: false,
    name: '',
    happiness: 0,
    habitat: ''
  },
  changeData: () => {},
  changeAll: () => {}
};

export const DetailContext = createContext<DetailContextState>(contextDefaultValues);

const DetailProvider: FC = ({ children }) => {
  const [data, setData] = useState(contextDefaultValues.data);
  const changeData = (key: string, newValue: string) => setData({ ...data, [key]: newValue });
  const changeAll = (detailObj: DetailObject) => setData(detailObj);

  return (
    <DetailContext.Provider
      value={{
        data,
        changeData,
        changeAll
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;
