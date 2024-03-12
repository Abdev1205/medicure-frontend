import React, { createContext, useState } from "react";
export const DataLayer = createContext(null)

const DataProvider = ({ children }) => {
  const [report, setReport] = useState(null);
  const [param, setParam] = useState(null);
  const [image, setImage] = useState(null);
  return (
    <DataLayer.Provider value={{param, setParam, report, setReport, image, setImage }}>
      {children}
    </DataLayer.Provider>
  );
};

export default DataProvider;
