import React, { createContext, useState } from 'react';
import AddModel from './AddModel'; // Import the AddModel component

// Create the context with an initial list of models
export const DataLayer = createContext();

export const DataProvider = ({ children }) => {
  // Initial list of models
  const [models, setModels] = useState([
    { name: 'Model A', description: 'Description for Model A' },
    { name: 'Model B', description: 'Description for Model B' },
    { name: 'Model C', description: 'Description for Model C' },
  ]);

  // Set the default model
  const [model, setModel] = useState(null);

  const addModel = (newModel) => {
    // Update the models list with a new model
    setModels([...models, newModel]);
  };

  return (
    <DataLayer.Provider
      value={{
        models,
        model,
        setModel,
        addModel, // Function to add a new model
      }}
    >
      {children}
    </DataLayer.Provider>
  );
};
